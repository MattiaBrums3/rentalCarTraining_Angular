import { Component, OnInit } from '@angular/core';
import {RENTALTABLE} from '../../configs/my-configs';
import {User} from '../../models/user';
import {Vehicle} from '../../models/vehicle';
import {RentalService} from '../../services/rental.service';
import {UserService} from '../../services/user.service';
import {VehicleService} from '../../services/vehicle.service';
import {ActivatedRoute} from '@angular/router';
import {Rental} from '../../models/rental';
import {forkJoin} from 'rxjs';
import {Location} from '@angular/common';

@Component({
  selector: 'app-customer-homepage',
  templateUrl: './customer-homepage.component.html',
  styleUrls: ['./customer-homepage.component.css']
})
export class CustomerHomepageComponent implements OnInit {
  title = 'Homepage';
  tableConfigRental = RENTALTABLE;

  rentals: Rental[];
  user: User;
  vehicles: Vehicle[];

  row: any = {id: null, idUser: null, idVehicle: null, dateStart: '',
    dateEnd: '', approved: '', user: '', vehicle: ''};
  object: any[] = [];

  constructor(private rentalService: RentalService,
              private userService: UserService,
              private vehicleService: VehicleService,
              private location: Location) { }

  ngOnInit(): void {
    const idUser = +sessionStorage.getItem('id');
    this.rentals = this.rentalService.getRentalsByUser(idUser);

    forkJoin([
      this.userService.getUserById(idUser),
      this.vehicleService.getVehicles()
    ]).subscribe(data => {
      this.user = data[0];
      this.vehicles = data[1];
      this.rentals.forEach(r => {
        this.row = r;
        this.row.user = this.user;
        this.row.vehicle = this.vehicles.find(v => v.id === this.row.idVehicle);
        this.object.push(this.row);
      });
    });
  }

  doOperation(event: any) {
    const action = event.action;

    if (action === 'Elimina') {
      this.rentalService.deleteRental(event.record.id)
        .subscribe(
          () => {
            alert('Prenotazione eliminata con successo.');
            this.goBack();
          }
        );
    }
  }

  goBack() {
    this.location.back();
  }

}
