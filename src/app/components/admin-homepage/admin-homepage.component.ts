import { Component, OnInit } from '@angular/core';
import {CATEGORYBUTTON, USERTABLE, VEHICLEBUTTON} from '../../classes/my-configs';
import {User} from '../../models/user';
import {AppService} from '../../app-service.service';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {
  title = 'Admin Homepage';

  categoryButton = CATEGORYBUTTON;
  vehicleButton = VEHICLEBUTTON;
  tableConfigUser = USERTABLE;

  users: User[];

  constructor(private service: AppService) {
    this.users = this.service.getUsers();
  }

  ngOnInit(): void {
  }
}
