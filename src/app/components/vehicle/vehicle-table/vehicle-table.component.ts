import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../models/vehicle';
import { VEHICLETABLE } from '../../../configs/my-configs';
import {VehicleService} from '../../../services/vehicle.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../models/category';
import {RentalService} from '../../../services/rental.service';
import {forkJoin} from 'rxjs';
import {Rental} from '../../../models/rental';
import * as moment from 'moment';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.css']
})
export class VehicleTableComponent implements OnInit {
  title = 'Lista Veicoli';

  token = sessionStorage.getItem('token');

  tableConfigVehicles = VEHICLETABLE;

  vehicles: Vehicle[];
  categories: Category[];
  rentals: Rental[];

  object: any[] = [];

  constructor(private location: Location,
              private router: Router,
              private route: ActivatedRoute,
              private vehicleService: VehicleService,
              private categoryService: CategoryService,
              private rentalService: RentalService) {}

  ngOnInit() {
    if (this.token === 'jwt-token-admin') {
      forkJoin([
        this.categoryService.getCategories(),
        this.vehicleService.getVehicles()
      ]).subscribe(data => {
        this.categories = data[0];
        this.vehicles = data[1];
        this.generateRowAdmin(this.vehicles);
      });
    } else {
      forkJoin([
        this.categoryService.getCategories(),
        this.vehicleService.getVehicles(),
        this.rentalService.getRentals()
      ]).subscribe(data => {
        this.categories = data[0];
        this.vehicles = data[1];
        this.rentals = data[2];
        this.generateRowCustomer(this.vehicles);
      });
    }
  }

  generateRowAdmin(vehicles: any[]) {
    let row: any = {id: null, model: '', manufacturer: '', licensePlate: '',
      yearOfRegistration: null, idCategory: null, categories: ''};
    vehicles.forEach(v => {
      row = v;
      row.category = this.categories.find(x => x.id === row.idCategory);
      this.object.push(row);
    });
  }

  generateRowCustomer(vehicles: any[]) {
    let row: any = {id: null, model: '', manufacturer: '', licensePlate: '',
      yearOfRegistration: null, idCategory: null, categories: '',
      actuallyRented: false};
    vehicles.forEach(v => {
      row = v;
      row.category = this.categories.find(x => x.id === row.idCategory);
      this.rentals.forEach(r => {
        if (r.idVehicle === row.id && r.dateEnd.toString() > moment().toISOString()) {
          row.actuallyRented = true;
        }
      });
      this.object.push(row);
    });
  }

  doOperation(event: any) {
    const action = event.action;

    if (action === 'Elimina') {
      this.vehicleService.deleteVehicle(event.record.id).subscribe(
        () => {
          alert('Veicolo eliminato con successo.');
          this.goBack();
        }
      );
    }
  }

  goBack() {
    this.location.back();
  }
}
