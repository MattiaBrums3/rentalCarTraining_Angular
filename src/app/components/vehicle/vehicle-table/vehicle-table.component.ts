import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../app-service.service';
import { Vehicle } from '../../../models/vehicle';
import { VEHICLETABLE } from '../../../classes/my-configs';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.css']
})
export class VehicleTableComponent implements OnInit {
  title = 'Lista Veicoli';

  tableConfigVehicles = VEHICLETABLE;

  vehicles: Vehicle[];

  constructor(private service: AppService) {
    this.vehicles = this.service.getVehicles();
  }

  ngOnInit() {
  }
}
