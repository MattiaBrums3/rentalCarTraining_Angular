import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginationPipe'
})
export class PaginationPipe implements PipeTransform {
  transform(items: any[], page: number, itemPage: number) {
    return items.slice(page * itemPage, (1 + page) * itemPage);
  }
}
