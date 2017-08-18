
import { Injectable } from "@angular/core";
import { IQuestion } from "./Question";
import { IQuota } from "./Quota";
import { Filter } from "./Filter/filter";
//import { HttpClient } from '@angular/common/http';
import { IQuestionViewModel } from "./QuestionsViewModel";
import { Observable } from "rxjs/Observable";

@Injectable()
export class QuestionService
{
    //constructor(private _http: HttpClient) {
       
    //}

    questions: IQuestion[];

    //getQuestionsHttp(): Observable<IQuestionViewModel>
    //{
    //    let questionUrl = "./api/questions";
    //    let response: Observable<IQuestionViewModel> = this._http.get<IQuestionViewModel>(questionUrl);
    //    return response;
    //}

    getQuestions(filter: Filter, sortBy: string): IQuestion[] // Observable<IQuestionViewModel>
    {
        this.questions = [
            {
                "id": 1,
                "title": "Comment faire un commentaire en C#?",
                "views": 150,
                "answers": 9,
                "creationDate": 1502804000,
                "tags": ["C#", "Azure"],
                "isAnswered": true,
                "lastActivity": 1502804000,
                "owner": {
                    "id": 3,
                    "avatarUrl": "https://i.stack.imgur.com/tDPsf.jpg",
                    "name": "Super Frédo",
                    "reputation": 7
                }
            },
            {
                "id": 2,
                "title": "Comment fonctionne Azure AD?",
                "views": 5,
                "answers": 16,
                "creationDate": 1502804000,
                "tags": ["Azure"],
                "isAnswered": false,
                "lastActivity": 1502804000,
                "owner": {
                    "id": 4,
                    "avatarUrl": "https://i.stack.imgur.com/tDPsf.jpg",
                    "name": "Hyper Frédo",
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
                if (question1.views > question2.views) {
                    comparison = -1;
                }
                else if (question1.views < question2.views) {
                    comparison = 1;
                }
            }
            else if (sortBy == "answers") {
                if (question1.answers > question2.answers) {
                    comparison = -1;
                }
                else if (question1.answers < question2.answers) {
                    comparison = 1;
                }
            }
            else if (sortBy == "date") {
                if (question1.creationDate > question2.creationDate) {
                    comparison = -1;
                }
                else if (question1.creationDate < question2.creationDate) {
                    comparison = 1;
                }
            }

            return comparison;
        });

        return questions;
    };
    
}