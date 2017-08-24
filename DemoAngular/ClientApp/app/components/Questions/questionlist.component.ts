import { Component, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { IQuestion } from "../Domain/Question";
import { IQuota } from "../Domain/Quota";
import { IQuestionViewModel } from "./QuestionsViewModel";

// FDLM pas de selector car le composant ne sera pas inclus dans un autre composant, il sera juste partie d'une route
@Component({
    templateUrl: './questionlist.component.html'
    , styleUrls: ['./questionlist.component.css']
})
export class QuestionListComponent {
    pageTitle: string = "Liste de questions";
    detailedView: boolean = true;
    questions: IQuestion[];
    quotas: IQuota;

    ToggleView(): void {
        this.detailedView = !this.detailedView;
    }

    onFilterRequested(vm: IQuestionViewModel): void {
        this.questions = vm.questions;
        this.quotas = vm.quota;
    }
}

