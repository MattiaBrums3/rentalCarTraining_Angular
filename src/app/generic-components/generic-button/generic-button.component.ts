import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { MyButtonConfig } from '../../classes/my-button-config';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.css']
})
export class GenericButtonComponent implements OnInit {
  @Input() buttonConfig: MyButtonConfig;
  @Output() onClick = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onClickButton(event: string) {
    this.onClick.emit(event);
    console.log('Pulsante', this.buttonConfig.text);
  }
}
