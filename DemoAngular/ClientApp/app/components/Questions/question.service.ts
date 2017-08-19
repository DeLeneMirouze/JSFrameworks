
import { Injectable } from "@angular/core";
import { IQuota } from "../Domain/Quota";
import { Filter } from "./Filter/filter";
import { IComment } from "../Domain/Comment"
import { HttpClient } from '@angular/common/http';
import { IQuestionViewModel } from "./QuestionsViewModel";
import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from "@angular/common/http";

import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';
import { IQuestion } from "../Domain/Question";


@Injectable()
export class QuestionService
{
    constructor(private _http: HttpClient) {
       
    }

    questions: IQuestion[];

    getQuestionsHttp(filter: Filter, sortBy: string): Observable<IQuestionViewModel>
    {
        let questionUrl = "./api/questions?";
        questionUrl += "sort=" + (sortBy ? sortBy : "");
        if (filter) {
            questionUrl += "&text=" + filter.title;
        }

        let response = this._http.get<IQuestionViewModel>(questionUrl)
            .share()
            .catch(this.handleError)
            ;

        return response;
    }

    private handleError(err: HttpErrorResponse)
    {
        console.log(err.message);
        return Observable.throw(<any>err.message);
    }
}