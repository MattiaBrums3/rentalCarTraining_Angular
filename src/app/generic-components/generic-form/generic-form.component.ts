import {Component, Input, OnInit, Output} from '@angular/core';
import {AppService} from '../../app-service.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {
  @Input() entity: string;
  @Input() action: string;
  @Input() object: any;

  @Output() outputEntity: any;
  @Output() outputAction: any;
  @Output() outputObject: any;

  url: string;
  title: string;

  constructor(private service: AppService) { }

  ngOnInit(): void {
    switch (this.entity) {
      case 'users':
        this.outputEntity = 'users';
        break;
    }

    switch (this.action) {
      case 'new':
        this.outputAction = 'new';
        break;
      case 'edit':
        this.outputAction = 'edit';
        break;
    }
  }

}
