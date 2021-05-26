import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RENTALHEADERS} from '../../../configs/my-configs';
import {Location} from '@angular/common';
import {RentalService} from '../../../services/rental.service';
import {forkJoin} from 'rxjs';
import {UserService} from '../../../services/user.service';
import {VehicleService} from '../../../services/vehicle.service';

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
            this.object.keys = RENTALHEADERS;
          });
        });
    }
  }

  doOperation(action: any) {
    if (action === 'Salva' && !this.checkFields()) {
      alert('Completa tutti i campi.');
      return;
    }

    if (action === 'Salva') {
      delete this.object.keys;
      delete this.object.user;
      delete this.object.vehicle;
      this.rentalService.saveRental(this.object)
        .subscribe(
          () => {
            this.goBack();
            this.rentalService.getRentals()
              .subscribe(r => console.log(r));
          }
          );
    } else {
      this.goBack();
    }
  }

  checkFields() {
    if (this.object.dateStart !== '' && this.object.dateEnd !== '') {
      return true;
    } else {
      return false;
    }
  }

  goBack() {
    this.location.back();
  }
}
