// FDLM: Les bonnes pratiques Angular conseillent d'utiliser des conventions de nommage qui vous
// aideront dans l'organisation de votre code, sa maintenance et la lecture de code trouv�s par ailleurs
//
// Par convention, le composant 'Root' � la t�te de la hi�rarchie de composant s'appelle 'App'. 
// Un projet Angular a toujours au moins un composant Root.
// '.component' indique que le fichier h�berge un composant
// '.ts' il s'agit du code TypeScript qui sera plus tard transpil� en .js
//
// par convention �galement, on appelle 'AppComponent' la classe du composant Root

import { Component, VERSION } from '@angular/core';
import { QuestionService } from "../Questions/question.service";

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [QuestionService]
})
export class AppComponent {
    constructor() {
        this.angularVersion = VERSION.full;
        this.pageTitle = 'Test Angular ' + this.angularVersion;
    }

    public angularVersion: string;
    pageTitle: string;
}
