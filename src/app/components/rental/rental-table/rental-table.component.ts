import { Component, OnInit } from '@angular/core';
import {RENTALTABLE} from '../../../configs/my-configs';
import {Rental} from '../../../models/rental';
import {RentalService} from '../../../services/rental.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {VehicleService} from '../../../services/vehicle.service';
import {forkJoin} from 'rxjs';
import {User} from '../../../models/user';
import {Vehicle} from '../../../models/vehicle';
import {Location} from '@angular/common';

@Component({
  selector: 'app-rental-table',
  templateUrl: './rental-table.component.html',
  styleUrls: ['./rental-table.component.css']
})
export class RentalTableComponent implements OnInit {
  title = 'Lista Prenotazioni';

  tableConfigRental = RENTALTABLE;

  rentals: Rental[];
  users: User[];
  vehicles: Vehicle[];

  row: any = {id: null, idUser: null, idVehicle: null, dateStart: '',
              dateEnd: '', approved: '', user: '', vehicle: ''};
  object: any[] = [];

  constructor(private rentalService: RentalService,
              private userService: UserService,
              private vehicleService: VehicleService,
              private router: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    const idUser = +this.router.snapshot.url[1].path;
    this.rentals = this.rentalService.getRentalsByUser(idUser);

    forkJoin([
      this.userService.getUsers(),
      this.vehicleService.getVehicles()
    ]).subscribe(data => {
        this.users = data[0];
        this.vehicles = data[1];
        this.rentals.forEach(r => {
          this.row = r;
          this.row.user = this.users.find(u => u.id === this.row.idUser);
          this.row.vehicle = this.vehicles.find(v => v.id === this.row.idVehicle);
          this.object.push(this.row);
        });
    });
  }

  doOperation(event: any) {
    const action = event.action;

    if (action === 'Accetta') {
      const idRental = +this.router.snapshot.url[1].path;
      this.rentalService.getRentalById(idRental)
        .subscribe(r => {
          r.approved = true;
          this.rentalService.saveRental(r)
            .subscribe(
              () => this.goBack()
            );
        });
    }

    if (action === 'Rifiuta') {
      this.rentalService.deleteRental(event.record.id)
        .subscribe(
          () => this.goBack()
        );
    }
  }

  goBack() {
    this.location.back();
  }

}
