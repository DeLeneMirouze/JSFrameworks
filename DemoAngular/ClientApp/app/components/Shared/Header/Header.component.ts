import { Component, Input } from '@angular/core';
import { IQuota } from "../../Questions/Quota";

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    selector: number = 0;
    // FDLM @Input rend cette propriété accessible depuis le composant parent
    _quotas: IQuota;

    @Input() 
    set quotas(value:IQuota) {
        this._quotas = value;

        let partition: number = this._quotas.quota_max / 3;
        if (this._quotas.quota_remaining < partition) {
            this.selector = 3;
        }
        else if (this._quotas.quota_remaining < 2*partition) {
            this.selector = 2;
        }
        else
        {
            this.selector = 1;
        }
    }
    get quotas():IQuota {
        return this._quotas; 
    }

    onQuotasChanged(quotas: IQuota): void {
 
    }
}