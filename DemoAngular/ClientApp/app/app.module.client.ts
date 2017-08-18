// FDLM configuration pour un fonctionnement de l'appli depuis un navigateur

// si on active le pre-rendering avec quelque chose comme:
// <app asp-prerender-module="ClientApp/dist/main-server">Loading...</app>
// c'est Node qui se charge de calculer le rendu des pages
// dans ce cas on passe par 'app.module.server'
// on peut alors �tre oblig� de compl�ter les modules si on a par exemple besoin de 'FormsModule', lire ceci:
// https://github.com/aspnet/JavaScriptServices/issues/986
//
// si on active pas le pre-rendering, dans ce cas le rendu sera fait c�t� client 
// et on passera par 'app.module.client'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// FDLM on charge ici la configuration commune � tous les environnements d'ex�cution
import { sharedConfig } from './app.module.shared';

@NgModule({
    bootstrap: sharedConfig.bootstrap,
    declarations: sharedConfig.declarations,
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ...sharedConfig.imports
    ],
    providers: [
        { provide: 'ORIGIN_URL', useValue: location.origin },
        ...sharedConfig.providers
    ]
})
export class AppModule {
}
