import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../../../models/vehicle';
import { VEHICLETABLE } from '../../../configs/my-configs';
import {VehicleService} from '../../../services/vehicle.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-vehicle-table',
  templateUrl: './vehicle-table.component.html',
  styleUrls: ['./vehicle-table.component.css']
})
export class VehicleTableComponent implements OnInit {
  title = 'Lista Veicoli';

  tableConfigVehicles = VEHICLETABLE;

  vehicles: Vehicle[];

  constructor(private location: Location,
              private router: Router,
              private route: ActivatedRoute,
              private service: VehicleService) {
    this.service.getVehicles()
      .subscribe(
        v => this.vehicles = v
      );
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
  }

  doOperation(event: any) {
    const action = event.action;

    if (action === 'Elimina') {
      this.service.deleteVehicle(event.record.id).subscribe(
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
