import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app-service.service';
import { Vehicle } from '../../models/vehicle';
import { VEHICLETABLE } from '../../classes/my-configs';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  title = 'Lista Veicoli';

  tableConfigVehicles = VEHICLETABLE;

  vehicles: Vehicle[];

  constructor(private service: AppService) {
    this.vehicles = this.service.getVehicles();
  }

  ngOnInit() {
  }
}
