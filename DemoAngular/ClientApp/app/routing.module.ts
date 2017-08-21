
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
//import { NavMenuComponent } from "./components/Shared/navmenu/navmenu.component";

@NgModule({
    exports: [RouterModule],
    declarations: [HomeComponent],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class RoutingModule {

}