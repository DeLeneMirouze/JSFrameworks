
import { NgModule } from "@angular/core";
import { CommonModule, JsonPipe } from '@angular/common';
//FDLM ngModel, ngForm...
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/Header.component";


@NgModule({
    imports: [
        CommonModule

    ],
    declarations: [
        HeaderComponent
    ],
    //FDLM composants et fonctionalités que l'on souhaite partager
    exports: [
        CommonModule,
        FormsModule,
        HeaderComponent,
        JsonPipe
    ]
})
export class SharedModule {
}