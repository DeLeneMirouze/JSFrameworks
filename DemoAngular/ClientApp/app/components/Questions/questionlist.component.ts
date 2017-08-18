import { Component, OnInit } from '@angular/core';
import { IQuestion } from './question';
import { Filter } from "./Filter/filter";
import { QuestionService } from "./question.service";
//import { HttpHandler } from '@angular/common/http';
//import { Observable } from "rxjs/Observable";

@Component({
    templateUrl: './questionlist.component.html'
    , styleUrls: ['./questionlist.component.css']
})
export class QuestionListComponent implements OnInit {
    constructor(private _questionService :QuestionService)
    {

    }

    ngOnInit(): void {
        this.questions = this._questionService.getQuestions(null, null);
        this.sortedQuestions = this.questions;

        //this._questionService.getQuestionsHttp()
        //    .subscribe(questions => {
        //        console.log('hhhhhhhhhh');
        //        //this.questions = questions.questions;
        //        //this.sortedQuestions = this.questions;
        //    }
        //       //, error => this.errorMessage=<any>error
        //);
    }

    pageTitle: string = "Liste de questions";
    detailedView: boolean = true;
    errorMessage: string;

    _sortFilter: string;
    get sortFilter(): string {
        return this._sortFilter;
    }
    set sortFilter(value:string) {
        this._sortFilter = value;
        this.sortedQuestions = this._questionService.getQuestions(null, this.sortFilter);
    }

    sortedQuestions: IQuestion[];
    questions: IQuestion[];

    ToggleView(): void {
        this.detailedView = !this.detailedView;
    }

    onFilterRequested(filter: Filter): void {
        this.sortedQuestions = this._questionService.getQuestions(filter, this.sortFilter);
    }
}

