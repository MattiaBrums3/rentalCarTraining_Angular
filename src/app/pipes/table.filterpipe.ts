import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class TableFilterPipe implements PipeTransform {
  transform(items: any[], searchToken: any, searchField: any) {
    // args[0]: searchToken; args[1]: searchKey
    if (!searchToken || !searchField) {
      return items;
    }

    searchToken = searchToken.toLowerCase();

    return items.filter(elem => elem[searchField].toString().toLowerCase().indexOf(searchToken) > -1);
  }
}
