import { Component, Input, OnChanges } from '@angular/core';
import { MyTableConfig } from '../../classes/my-table-config';
import { NEWBUTTON, EDITBUTTON, DELETEBUTTON } from '../../classes/my-button-config';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnChanges {
  @Input() tableConfig: MyTableConfig;
  @Input() data: any[];

  newButton = NEWBUTTON;
  editButton = EDITBUTTON;
  deleteButton = DELETEBUTTON;

  defaultOrderColumn: string;
  defaultOrderType: string;

  constructor() { }

  ngOnChanges(): void {
    this.defaultOrderColumn = this.tableConfig.order.defaultColumn;
    this.defaultOrderType = this.tableConfig.order.orderType;
    this.orderTable(this.defaultOrderColumn);
  }

  functionCall(event: string, id?: number) {
    if (id === undefined) {
      console.log('functionCall:', event);
    } else {
      console.log('functionCall:', event, ', ID:', id);
    }

  }

  getButton(action: number) {
    switch (action) {
      case 0:
        return this.newButton;
        break;
      case 1:
        return this.editButton;
        break;
      case 2:
        return this.deleteButton;
        break;
    }
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
  }
}
