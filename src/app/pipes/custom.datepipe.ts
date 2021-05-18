import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Pipe({
  name: 'customDate',
  pure: false
})
export class CustomDatePipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (typeof value !== 'number') {
      if (moment(value, moment.ISO_8601).isValid()) {
        return super.transform(value, 'yyyy-MM-dd');
      } else {
        return value;
      }
    }
    return value;
  }
}
