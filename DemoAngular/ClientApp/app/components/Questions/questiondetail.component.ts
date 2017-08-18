
import { Component, OnInit } from "@angular/core";
import { IQuestion } from "./Question";
import { IDetailedQuestion } from "./DetailedQuestion";
import { ActivatedRoute, Router } from "@angular/router";

// FDLM pas de selector car le composant ne sera pas inclus dans un autre composant, il sera juste partie d'une route
@Component(
    {
        templateUrl: "./questiondetail.component.html"
    }
)
export class QuestionDetail implements OnInit {
    constructor(private _route:ActivatedRoute, private _router:Router) {

    }

    ngOnInit(): void {
        // FDLM le + est un opérateur javascript pour convertir une chaîne en valeur numérique
        let id = +this._route.snapshot.paramMap.get("id");
    }

    detailedQuestion: IDetailedQuestion;

    callBack(): void {
        this._router.navigate(["/questions"]);
    }
}