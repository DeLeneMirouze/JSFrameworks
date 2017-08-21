import { Component, OnInit, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { IQuestion } from "../Domain/Question";
import { Filter } from "./Filter/filter";
import { QuestionService } from "./question.service";
import { IQuota } from "../Domain/Quota";

// FDLM pas de selector car le composant ne sera pas inclus dans un autre composant, il sera juste partie d'une route
@Component({
    templateUrl: './questionlist.component.html'
    , styleUrls: ['./questionlist.component.css']
})
export class QuestionListComponent implements OnInit {
    constructor(private _questionService: QuestionService)
    {

    }

    ngOnInit(): void {
        this.sortFilter = null;

        this.request(null, this.sortFilter);
    }

    // lance une requête au service web API
    private request(filter: Filter, sortBy: string):void
    {
        // FDLM: 
        // https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html

        this.errorMessage = null;
        this._questionService.getQuestionsHttp(filter, sortBy)
            .subscribe(vm => {
                this.questions = vm.questions;

                this.quotas= vm.quota;
            }
            , error => this.errorMessage = <any>error
            );
    }

    pageTitle: string = "Liste de questions";
    detailedView: boolean = true;
    errorMessage: string;
    questions: IQuestion[];
    quotas: IQuota;

    _sortFilter: string;
    get sortFilter(): string {
        return this._sortFilter;
    }
    set sortFilter(value:string) {
        this._sortFilter = value;
        this.request(this.filter, this.sortFilter);
    }

    ToggleView(): void {
        this.detailedView = !this.detailedView;
    }

    // Recherche
    private filter: Filter; // pour garder une trace du dernier filtre lorsque l'on fait un tri

    onFilterRequested(filter: Filter): void {
        this.filter = filter;
        this.request(filter, this.sortFilter);
    }
}

