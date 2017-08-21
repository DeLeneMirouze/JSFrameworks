import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component'
import { HttpClientModule } from '@angular/common/http'
import { NavMenuComponent } from "./components/Shared/navmenu/navmenu.component";
//FDLM feature module
import { QuestionModule } from './question.module';
import { RoutingModule } from "./routing.module";


export const sharedConfig: NgModule = {
    bootstrap: [AppComponent],
    providers: [],
    declarations: [
        AppComponent,
        NavMenuComponent
    ],
    imports: [
        HttpClientModule,
        QuestionModule,
        RoutingModule
    ]
};
