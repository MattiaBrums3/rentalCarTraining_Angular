import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MyButtonConfig } from '../../classes/my-button-config';

@Component({
  selector: 'app-generic-button',
  templateUrl: './generic-button.component.html',
  styleUrls: ['./generic-button.component.css']
})
export class GenericButtonComponent {
  @Input() buttonConfig: MyButtonConfig;

  @Output() onClick = new EventEmitter<any>();

  constructor() {
  }

  onClickButton(event: string) {
    this.onClick.emit(event);
  }
}
