import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './components/app/app.component'
import { HttpClientModule } from '@angular/common/http'
import { NavMenuComponent } from './components/Shared/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/Shared/header/Header.component';
import { QuestionListComponent } from './components/Questions/questionlist.component';
import { FilterListComponent } from './components/Questions/filter/filter.component';
import { EpochToDatePipe } from './components/Shared/Pipes/EpochToDate.pipe';
import { EscapeHtmlPipe } from './components/Shared/Pipes/keephtml.pipe';
import { QuestionDetail } from './components/Details/questiondetail.component';
import { QuestionGardService } from './components/Shared/navmenu/questiongard.service';
import { Comments } from './components/details/comments.component';

export const sharedConfig: NgModule = {
    bootstrap: [AppComponent],
    providers: [QuestionGardService],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        HeaderComponent,
        QuestionListComponent,
        FilterListComponent,
        EpochToDatePipe,
        QuestionDetail,
        EscapeHtmlPipe,
        Comments
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'questions', component: QuestionListComponent },
            { path: 'questions/:id', canActivate: [QuestionGardService], component: QuestionDetail },
            { path: '**', redirectTo: 'home' }
        ]),
        HttpClientModule
    ]
};
