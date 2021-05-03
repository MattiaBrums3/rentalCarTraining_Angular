import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MyTableConfig } from '../../classes/my-table-config';
import { MyButtonConfig } from '../../classes/my-button-config';
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

  constructor() { }

  ngOnChanges(): void {

  }

  functionCall(event: string, id: number) {
    console.log('functionCall:', event, ', id:', id);
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
}
