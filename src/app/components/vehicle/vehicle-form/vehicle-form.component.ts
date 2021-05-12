import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VEHICLEHEADERS} from '../../../classes/my-configs';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  entity = 'vehicles';
  action: string;
  object: any;
  objId: number;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAction();
    this.getObject();
  }

  getAction() {
    this.action = this.router.snapshot.url[0].path;
  }

  getObject() {
    if (this.action === 'new') {
      this.object = {model: '', manufacturer: '', licensePlate: '', yearOfRegistration: 0};
    } else {
      this.objId = +this.router.snapshot.url[1].path;
      // search user by id in service
    }

    this.object.keys = VEHICLEHEADERS;
  }

}
