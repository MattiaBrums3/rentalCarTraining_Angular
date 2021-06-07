import {
  Component, Input, OnChanges,
  Output, EventEmitter, SimpleChanges
} from '@angular/core';
import { MyTableConfig } from '../../../configs/my-table-config';
import {Router} from '@angular/router';
import {RentalService} from '../../../services/rental.service';
import * as moment from 'moment';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnChanges {
  @Input() tableConfig: MyTableConfig;
  @Input() data: any[];

  @Output() emitResult = new EventEmitter<any>();

  token = sessionStorage.getItem('token');

  moment = moment;
  today = new Date().getTime();

  defaultOrderColumn: string;
  defaultOrderType: string;

  searchToken: string;
  searchKey: string;

  currentPage = 0;
  pagesNumber: number;

  currentRoute: string;

  constructor(private router: Router) { }

  ngOnChanges() {
    this.defaultOrderColumn = this.tableConfig.order.defaultColumn;
    this.defaultOrderType = this.tableConfig.order.orderType;
    this.pagesNumber = Math.ceil(this.data.length / this.tableConfig.pagination.itemPerPage);
    this.orderTable(this.defaultOrderColumn);
    this.currentRoute = this.router.url;
  }

  onClickButton(event: any, rowId: any, record?: any) {
    if (record === undefined) {
      record = {obj: 'No Record For this type of Button'};
    }

    const btn = {button: rowId, action: event, record};
    this.emitResult.emit(btn);
  }

  orderTable(orderColumn: string) {
    this.defaultOrderColumn = orderColumn;
    if (this.defaultOrderType === 'asc') {
      this.data.sort((a, b) => a[orderColumn] < b[orderColumn] ? 1 :
      a[orderColumn] > b[orderColumn] ? -1 : 0);
      this.defaultOrderType = 'desc';
    } else {
      this.data.sort((a, b) => a[orderColumn] > b[orderColumn] ? 1 :
        a[orderColumn] < b[orderColumn] ? -1 : 0);
      this.defaultOrderType = 'asc';
    }
    this.changePage(0);
  }

  changeItemsPerPage(item: any) {
    this.tableConfig.pagination.itemPerPage = +item;
    this.currentPage = 0;
    this.pagesNumber = Math.ceil(this.data.length / this.tableConfig.pagination.itemPerPage);

    if (this.pagesNumber < 1) {
      this.pagesNumber = 1;
    }
  }

  changePage(item: any) {
    this.currentPage = +item;
  }

  mapField(event: string) {
    let index = 0;
    this.searchKey = undefined;

    while (index < this.tableConfig.headers.length && this.searchKey === undefined) {
      if (this.tableConfig.headers[index].label === event) {
        this.searchKey = this.tableConfig.headers[index].key;
      }
      index++;
    }
  }
}
