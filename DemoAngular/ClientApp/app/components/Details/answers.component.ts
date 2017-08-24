
import { Component, Input } from "@angular/core";
import { IAnswer } from "../Domain/Answer";

@Component(
    {
        selector: "answers",
        styleUrls: ["./answers.component.css"],
        templateUrl: "./answers.component.html"
    }
)
export class AnswersComponent {
    // FDLM @Input rend cette propriété accessible depuis le composant parent
   @Input() answers: IAnswer[];
}