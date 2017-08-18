
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


@Injectable()
export class QuestionService
{
    constructor(private _http: HttpClient) {
       
    }

    questions: IQuestion[];

    getQuestionsHttp(): Observable<IQuestionViewModel>
    {
        let questionUrl = "./api/questions";
        let response = this._http.get<IQuestionViewModel>(questionUrl)
            .do(data=>console.log('ALL: ' + JSON.stringify(data)))
            .catch(this.handleError)
            ;
        return response;
    }

    getQuestions(filter: Filter, sortBy: string): IQuestion[] 
    {
        this.questions = [
            {
                "question_id": 1,
                "title": "Comment faire un commentaire en C#?",
                "view_count": 150,
                "answer_count": 9,
                "creation_date": 1502804000,
                "tags": ["C#", "Azure"],
                "is_answered": true,
                "last_activity_date": 1502804000,
                "owner": {
                    "user_id": 3,
                    "profile_image": "https://i.stack.imgur.com/tDPsf.jpg",
                    "display_name": "Super Frédo",
                    "reputation": 7
                }
            },
            {
                "question_id": 2,
                "title": "Comment fonctionne Azure AD?",
                "view_count": 5,
                "answer_count": 16,
                "creation_date": 1502804000,
                "tags": ["Azure"],
                "is_answered": false,
                "last_activity_date": 1502804000,
                "owner": {
                    "user_id": 4,
                    "profile_image": "https://i.stack.imgur.com/tDPsf.jpg",
                    "display_name": "Hyper Frédo",
                    "reputation": 5
                }
            }
        ];

        if (filter)
        {
            if (filter.title) {
                filter.title = filter.title.toLocaleLowerCase();

                this.questions = this.questions.filter((question: IQuestion) =>
                    question.title.toLocaleLowerCase().indexOf(filter.title) !== -1
                );
            }
        }

        if (sortBy && sortBy)
        {
            this.questions = this.performSort(sortBy, this.questions);
        }

        return this.questions;
    }

    private performSort(sortBy: string, questions : IQuestion[]): IQuestion[] {
        questions = questions.sort((question1: IQuestion, question2: IQuestion) => {
            sortBy = sortBy.toLocaleLowerCase();

            let comparison: number = 0;

            if (sortBy == "views") {
                if (question1.view_count > question2.view_count) {
                    comparison = -1;
                }
                else if (question1.view_count < question2.view_count) {
                    comparison = 1;
                }
            }
            else if (sortBy == "answers") {
                if (question1.answer_count > question2.answer_count) {
                    comparison = -1;
                }
                else if (question1.answer_count < question2.answer_count) {
                    comparison = 1;
                }
            }
            else if (sortBy == "date") {
                if (question1.creation_date > question2.creation_date) {
                    comparison = -1;
                }
                else if (question1.creation_date < question2.creation_date) {
                    comparison = 1;
                }
            }

            return comparison;
        });

        return questions;
    };

    private handleError(err: HttpErrorResponse)
    {
        console.log(err.message);
        return Observable.throw(<any>err.message);
    }
}