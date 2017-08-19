
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
import { IDetailViewModel } from "../Details/DetailViewModel";


@Injectable()
export class QuestionService
{
    constructor(private _http: HttpClient) {
       
    }

    questions: IQuestion[];

    getQuestionsHttp(filter: Filter, sortBy: string): Observable<IQuestionViewModel>
    {
        let requestUrl = "./api/questions?";
        requestUrl += "sort=" + (sortBy ? sortBy : "");
        if (filter) {
            requestUrl += "&text=" + filter.title;
        }

        let response = this._http.get<IQuestionViewModel>(requestUrl)
            .share()
            .catch(this.handleError)
            ;

        return response;
    }

    getQuestionById(id: number): Observable<IDetailViewModel>
    {
        let requestUrl = "./api/questions/" + id;
        let response = this._http.get<IDetailViewModel>(requestUrl)
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