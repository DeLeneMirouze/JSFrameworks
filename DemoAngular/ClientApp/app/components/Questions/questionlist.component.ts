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
        this.sortFilter = null;

        this.request(null, this.sortFilter);
    }

    private request(filter: Filter, sortBy: string):void
    {
        this._questionService.getQuestionsHttp(filter, sortBy)
            .subscribe(vm => {
                this.questions = vm.questions;
                this.quota = vm.quota;

                this.sortedQuestions = this.questions;

                this.sortFilter = null;
            }
            , error => this.errorMessage = <any>error
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
        this.request(null, this.sortFilter);
    }

    ToggleView(): void {
        this.detailedView = !this.detailedView;
    }

    onFilterRequested(filter: Filter): void {
        this.sortedQuestions = this._questionService.getQuestions(filter, this.sortFilter);
    }
}

