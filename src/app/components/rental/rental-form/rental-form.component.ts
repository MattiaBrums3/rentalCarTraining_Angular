import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RENTALHEADERS} from '../../../configs/my-configs';
import {Location} from '@angular/common';
import {RentalService} from '../../../services/rental.service';
import {forkJoin} from 'rxjs';
import {UserService} from '../../../services/user.service';
import {VehicleService} from '../../../services/vehicle.service';
import * as moment from 'moment';

@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrls: ['./rental-form.component.css']
})
export class RentalFormComponent implements OnInit {
  entity = 'rentals';
  action: any;
  object: any;
  objToSave: any;

  constructor(private router: ActivatedRoute,
              private location: Location,
              private rentalService: RentalService,
              private userService: UserService,
              private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.getAction();
    this.getObject();
  }

  getAction() {
    this.action = this.router.snapshot.url[2].path;
  }

  getObject() {
    const idUser = +sessionStorage.getItem('id');
    const idVehicle = +this.router.snapshot.url[1].path;

    if (this.action === 'new') {
      forkJoin([
        this.userService.getUserById(idUser),
        this.vehicleService.getVehicleById(idVehicle)
      ]).subscribe(data => {
          this.object = {idUser, idVehicle, dateStart: new Date(), dateEnd: new Date(), approved: false,
                        user: data[0], vehicle: data[1]};
          this.object.keys = RENTALHEADERS;
      });
    } else {
      const idRental = +this.router.snapshot.url[3].path;
      this.rentalService.getRentalById(idRental)
        .subscribe(o => {
          this.object = o;
          forkJoin([
            this.userService.getUserById(idUser),
            this.vehicleService.getVehicleById(idVehicle)
          ]).subscribe(data => {
            this.object.user = data[0];
            this.object.vehicle = data[1];
            this.object.idUser = this.object.user.id;
            this.object.idVehicle = this.object.vehicle.id;
            this.object.keys = RENTALHEADERS;
          });
        });
    }
  }

  doOperation(action: any) {
    if (action !== 'Salva') {
      this.goBack();
      return;
    }

    if (action === 'Salva' && !this.checkFields()) {
      alert('Completa tutti i campi.');
      return;
    }

    if (!this.checkDates()) {
      alert('Data di Fine >= Data di Inizio!');
      return;
    }

    if (action === 'Salva') {
      this.rentalService.saveRental(this.object)
        .subscribe(
          () => {
            this.goBack();
            this.rentalService.getRentals()
              .subscribe(r => console.log(r));
          }
          );
    }
  }

  checkFields() {
    if (this.object.dateOfStart !== null && this.object.dateOfEnd !== null) {
      return true;
    } else {
      return false;
    }
  }

  checkDates() {
    const dateStart = moment(this.object.dateOfStart).format('YYYY/MM/DD');
    const dateEnd = moment(this.object.dateOfEnd).format('YYYY/MM/DD');

    if (dateStart >= dateEnd) {
      return false;
    } else {
      return true;
    }
  }

  goBack() {
    this.location.back();
  }
}
