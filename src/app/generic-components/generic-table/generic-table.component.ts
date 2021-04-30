import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { MyTableConfig } from '../../classes/my-table-config';
import { USERTABLE } from '../../classes/my-headers';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnChanges {
  @Input() tableConfig: MyTableConfig;
  @Input() data: any[];

  constructor() { }

  ngOnChanges(): void {

  }
}
