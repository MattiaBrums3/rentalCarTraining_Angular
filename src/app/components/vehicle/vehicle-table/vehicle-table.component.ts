import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../models/vehicle';
import { VEHICLETABLE } from '../../../classes/my-configs';
import {VehicleService} from '../../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.css']
})
export class VehicleTableComponent implements OnInit {
  title = 'Lista Veicoli';

  tableConfigVehicles = VEHICLETABLE;

  vehicles: Vehicle[];

  constructor(private service: VehicleService) {
    this.service.getVehicles()
      .subscribe(
        v => this.vehicles = v
      );
  }

  ngOnInit() {
  }
}
