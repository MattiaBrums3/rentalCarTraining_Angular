import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { MyTableConfig } from '../../classes/my-table-config';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnChanges {
  @Input() tableConfig: MyTableConfig;
  @Input() data: any[];
  keys: string[];

  constructor() { }

  ngOnChanges() {
    this.keys = Object.keys(this.data[0]);
  }
}
