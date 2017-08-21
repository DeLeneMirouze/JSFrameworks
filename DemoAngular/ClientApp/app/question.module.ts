
import { NgModule } from "@angular/core";
import { Comments } from './components/details/comments.component';
import { Answers } from './components/details/answers.component';
import { QuestionListComponent } from './components/Questions/questionlist.component';
import { FilterListComponent } from './components/Questions/filter/filter.component';
import { EpochToDatePipe } from './components/Shared/Pipes/EpochToDate.pipe';
import { EscapeHtmlPipe } from './components/Shared/Pipes/keephtml.pipe';
import { QuestionDetail } from './components/Details/questiondetail.component';
import { RouterModule } from "@angular/router";
import { QuestionGardService } from "./components/Shared/navmenu/questiongard.service";
import { QuestionService } from "./components/Questions/question.service";

//FDLM shared module
import { SharedModule } from './components/shared/shared.module';

@NgModule(
    {
        imports: [
            SharedModule,
            RouterModule.forChild([
                { path: 'questions', component: QuestionListComponent },
                { path: 'questions/:id', canActivate: [QuestionGardService], component: QuestionDetail }
            ]
            )
        ],
        declarations: [
            Comments,
            Answers,
            QuestionListComponent,
            FilterListComponent,
            EpochToDatePipe,
            EscapeHtmlPipe,
            QuestionDetail
        ],
        providers: [
            QuestionGardService,
            QuestionService
        ]
    }
)
export class QuestionModule
{

}