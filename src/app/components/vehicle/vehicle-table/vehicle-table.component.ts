import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../models/vehicle';
import { VEHICLETABLE } from '../../../configs/my-configs';
import {VehicleService} from '../../../services/vehicle.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../models/category';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.css']
})
export class VehicleTableComponent implements OnInit {
  title = 'Lista Veicoli';

  tableConfigVehicles = VEHICLETABLE;

  vehicles: Vehicle[];
  categories: Category[];

  row: any = {id: null, model: '', manufacturer: '', licensePlate: '',
    yearOfRegistration: null, idCategory: null, categories: ''};
  object: any[] = [];

  constructor(private location: Location,
              private router: Router,
              private route: ActivatedRoute,
              private vehicleService: VehicleService,
              private categoryService: CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe(c => {
        this.categories = c;
        this.getVehicles();
      });
  }

  getVehicles() {
    this.vehicleService.getVehicles()
      .subscribe(
        v => {
          this.vehicles = v;
          this.vehicles.forEach(vehicle => {
            this.generateRow(vehicle);
          });
        }
      );
  }

  generateRow(vehicle: any) {
    this.row = vehicle;
    this.row.category = this.categories.find(x => x.id === this.row.idCategory);
    this.object.push(this.row);
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
