import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class TableFilterPipe implements PipeTransform {
  transform(items: any[], args: any[]) {
    // args[0]: searchToken; args[1]: searchField
    if (!args[0] || !args[1]) {
      return items;
    }

    args[0] = args[0].toLowerCase();

    return items.filter(elem => elem[args[1]].toString().toLowerCase().indexOf(args[0]) > -1);
  }
}
