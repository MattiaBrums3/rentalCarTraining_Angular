import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MyTableConfig } from '../../classes/my-table-config';
import { MyButtonConfig } from '../../classes/my-button-config';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnChanges {
  @Input() tableConfig: MyTableConfig;
  @Input() data: any[];

  editButton: MyButtonConfig = {customCssClass: 'btn btn-success', text: 'Modifica', icon: 'edit'};
  deleteButton: MyButtonConfig = {customCssClass: 'btn btn-danger', text: 'Elimina', icon: 'delete'};

  constructor() { }

  ngOnChanges(): void {

  }

  functionCall(event: string, id: number) {
    console.log('functionCall:', event, ', id:', id);
  }
}
