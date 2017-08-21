
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
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
        HeaderComponent
    ]
})
export class SharedModule {
}