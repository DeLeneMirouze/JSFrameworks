
import { Pipe, PipeTransform } from '@angular/core'
import {  DatePipe } from '@angular/common'

@Pipe ({
    name:"epochToDate"
})
export class EpochToDatePipe extends DatePipe implements PipeTransform {
    transform(value: any, args: string): string | null {
        // Angular gère les timestamps en secondes et pas en ms
            value = value * 1000;
            return super.transform(value, args);
        }
}