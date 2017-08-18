import { Component, OnInit } from '@angular/core';
import { IQuestion } from './question';
import { Filter } from "./Filter/filter";
import { QuestionService } from "./question.service";
import { IQuota } from "./Quota";

@Component({
    templateUrl: './questionlist.component.html'
    , styleUrls: ['./questionlist.component.css']
})
export class QuestionListComponent implements OnInit {
    constructor(private _questionService :QuestionService)
    {

    }

    ngOnInit(): void {
        this._questionService.getQuestionsHttp()
            .subscribe(vm => {
                this.questions = vm.questions;
                this.quota = vm.quota;

                this.sortedQuestions = this.questions;
                console.log(this.questions);
            }
               , error => this.errorMessage=<any>error
        );
    }

    pageTitle: string = "Liste de questions";
    detailedView: boolean = true;
    errorMessage: string;
    sortedQuestions: IQuestion[];
    questions: IQuestion[];
    quota: IQuota;

    _sortFilter: string;
    get sortFilter(): string {
        return this._sortFilter;
    }
    set sortFilter(value:string) {
        this._sortFilter = value;
        this.sortedQuestions = this._questionService.getQuestions(null, this.sortFilter);
    }

    ToggleView(): void {
        this.detailedView = !this.detailedView;
    }

    onFilterRequested(filter: Filter): void {
        this.sortedQuestions = this._questionService.getQuestions(filter, this.sortFilter);
    }
}

