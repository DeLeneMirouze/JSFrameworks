
import { Component, Input } from "@angular/core";
import { IComment } from "../Domain/Comment";

@Component(
    {
        selector:"comments",
        styleUrls:["./comments.component.css"],
        templateUrl:"./comments.component.html"
    }
)
export class CommentsComponent {
    // FDLM @Input rend cette propriété accessible depuis le composant parent
    @Input() comments:[IComment]
}