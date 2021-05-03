import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (moment(value, moment.ISO_8601).isValid()) {
      return super.transform(value, 'dd-MM-yyyy');
    } else {
      return value;
    }
  }
}
