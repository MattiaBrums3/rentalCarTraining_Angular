import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Vehicle} from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vehiclesUrl = 'api/vehicles';

  constructor(private http: HttpClient) { }

  getVehicles() {
    return this.http.get<Vehicle[]>(this.vehiclesUrl)
      .pipe(
        tap(_ => console.log('Fetched Vehicles'))
      );
  }
}
