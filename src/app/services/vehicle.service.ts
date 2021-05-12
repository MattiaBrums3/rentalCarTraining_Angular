import { Injectable } from '@angular/core';
import { VEHICLES } from '../volatile_data/mock-vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  getVehicles() {
    return VEHICLES;
  }
}
