import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {VEHICLEHEADERS} from '../../../configs/my-configs';
import {VehicleService} from '../../../services/vehicle.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {
  entity = 'vehicles';
  action: string;
  object: any;

  constructor(private router: ActivatedRoute,
              private service: VehicleService,
              private location: Location) { }

  ngOnInit(): void {
    this.getAction();
    this.getObject();
  }

  getAction() {
    this.action = this.router.snapshot.url[0].path;
  }

  getObject() {
    if (this.action === 'new') {
      this.object = {model: '', manufacturer: '', licensePlate: '', yearOfRegistration: null};
      this.object.keys = VEHICLEHEADERS;
    } else {
      const objId = +this.router.snapshot.url[1].path;
      this.service.getVehicleById(objId)
        .subscribe(o => {
          this.object = o;
          this.object.keys = VEHICLEHEADERS;
        });
    }
  }

  doOperation(action: any) {
    if (action === 'Salva' && !this.checkFields()) {
      alert('Completa tutti i campi.');
      return;
    }

    if (action === 'Salva') {
      this.service.saveVehicle(this.object)
        .subscribe(
          () => this.goBack()
        );
    } else {
      this.goBack();
    }
  }

  checkFields() {
    // false if there is one empty field, true otherwise
    if (this.object.model !== '' && this.object.manufacturer !== '' && this.object.licensePlate !== ''
      && this.object.yearOfRegistration !== '') {
      return true;
    } else {
      return false;
    }
  }

  goBack() {
    this.location.back();
  }

}
