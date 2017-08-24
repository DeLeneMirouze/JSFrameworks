import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Filter } from "./filter";
import { NgForm } from "@angular/forms";
import { QuestionService } from "../question.service";
import { IQuestionViewModel } from "../QuestionsViewModel";

@Component({
    selector: 'filter',
    templateUrl: './filter.component.html'
})
export class FilterListComponent implements OnInit {
    constructor(private _questionService: QuestionService)
    {

    }

    ngOnInit(): void {
        this.sortFilter = null;
    }

    filter: Filter = new Filter(); // pour garder une trace du dernier filtre lorsque l'on fait un tri

    // FDLM https://www.sitepoint.com/angular-2-components-inputs-outputs/
    @Output() filterRequested: EventEmitter<IQuestionViewModel> = new EventEmitter<IQuestionViewModel>();

    search(form: NgForm) {
        this.filter = form.value;
        this.request(this.filter, this.sortFilter);
    }

    errorMessage: string;
    loading: boolean;

    _sortFilter: string;
    get sortFilter(): string {
        return this._sortFilter;
    }
    set sortFilter(value: string) {
        this._sortFilter = value;
        this.request(this.filter, this.sortFilter);
    }

    // lance une requête au service web API
    private request(filter: Filter, sortBy: string): void {
        // FDLM: 
        // https://blog.thoughtram.io/angular/2016/02/22/angular-2-change-detection-explained.html

        this.loading = true;

        this.errorMessage = null;
        this._questionService.getQuestionsHttp(filter, sortBy)
            .subscribe(vm => {
                //console.log(JSON.stringify(vm));

                this.filterRequested.emit(vm);
                this.loading = false;
            }
            , error => {
                this.errorMessage = <any>error;
                this.loading = false;
            }
            );
    }
}