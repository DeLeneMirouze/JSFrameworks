
import { Injectable } from "@angular/core";
import { IQuestion } from "./Question";
import { IQuota } from "./Quota";
import { Filter } from "./Filter/filter";
import { IComment } from "./Comment"
import { HttpClient } from '@angular/common/http';
import { IQuestionViewModel } from "./QuestionsViewModel";
import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from "@angular/common/http";

import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/share';


@Injectable()
export class QuestionService
{
    constructor(private _http: HttpClient) {
       
    }

    questions: IQuestion[];

    getQuestionsHttp(filter: Filter, sortBy: string): Observable<IQuestionViewModel>
    {
        let questionUrl = "./api/questions?";
        if (filter) {
            questionUrl = "./api/search?";

            questionUrl += "sort=" + (sortBy ? sortBy : "");

            questionUrl += "&text=" + filter.title;
            //questionUrl += "&toDate=" + filter.toDate;
            //questionUrl += "&fromDate=" + filter.fromDate;
        }
        else {
            questionUrl += "sort=" + (sortBy ? sortBy : "");
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