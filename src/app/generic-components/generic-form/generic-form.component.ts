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

  url: string;
  title: string;

  constructor(private service: AppService) { }

  ngOnInit(): void {
  }

}
