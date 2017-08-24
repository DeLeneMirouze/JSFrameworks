import { Component, Input } from '@angular/core';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent {
    // FDLM @Input rend cette propri�t� accessible depuis le composant parent
    @Input() pageTitle: string;
}
