import { Component, OnInit } from '@angular/core';
import {CATEGORYBUTTON, USERTABLE, VEHICLEBUTTON} from '../../classes/my-configs';

@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.css']
})
export class AdminHomepageComponent implements OnInit {
  title = 'Admin Homepage';

  categoryButton = CATEGORYBUTTON;
  vehicleButton = VEHICLEBUTTON;

  constructor() {
  }

  ngOnInit(): void {
  }
}
