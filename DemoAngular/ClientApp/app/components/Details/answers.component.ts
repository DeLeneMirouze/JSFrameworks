
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
   @Input() answers: IAnswer[];
}