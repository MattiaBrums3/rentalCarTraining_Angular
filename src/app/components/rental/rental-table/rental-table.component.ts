import { Component, OnInit } from '@angular/core';
import {RENTALTABLE} from '../../../configs/my-configs';
import {Rental} from '../../../models/rental';
import {RentalService} from '../../../services/rental.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {VehicleService} from '../../../services/vehicle.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-rental-table',
  templateUrl: './rental-table.component.html',
  styleUrls: ['./rental-table.component.css']
})
export class RentalTableComponent implements OnInit {
  title = 'Lista Prenotazioni';

  tableConfigRental = RENTALTABLE;

  rentals: Rental[];
  row: any = {id: null, idUser: null, idVehicle: null, dateStart: '',
              dateEnd: '', approved: '', user: '', vehicle: ''};
  object: any[] = [];

  constructor(private rentalService: RentalService,
              private userService: UserService,
              private vehicleService: VehicleService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    const idUser = +this.router.snapshot.url[1].path;
    this.rentals = this.rentalService.getRentalsByUser(idUser);

    this.rentals.forEach(r => {
      this.row = r;
      forkJoin([
        this.userService.getUserById(this.row.idUser),
        this.vehicleService.getVehicleById(this.row.idVehicle)
      ]).subscribe(data => {
        this.row.user = data[0];
        this.row.vehicle = data[1];
        this.object.push(this.row);
      });
    });
  }

  doOperation(action: any) {

  }

}
