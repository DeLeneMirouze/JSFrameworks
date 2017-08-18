import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";


@Injectable()
export class QuestionGardService implements CanActivate {
    constructor(private _router:Router)
    {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        let id = +route.url[1].path;
        console.log(id);

        if (isNaN(id) || id < 1)
        {
            this._router.navigate(["/questions"]);
            return false;
        }

        return true;
    }

}