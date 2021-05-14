import { Injectable } from '@angular/core';
import {tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Vehicle} from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vehiclesUrl = 'api/vehicles';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getVehicles() {
    return this.http.get<Vehicle[]>(this.vehiclesUrl)
      .pipe(
        tap(_ => console.log('Fetched Vehicles'))
      );
  }

  getVehicleById(id: number) {
    const url = `${this.vehiclesUrl}/${id}`;
    return this.http.get<Vehicle>(url)
      .pipe(
        tap(_ => console.log(`Fetched Vehicle ${id}`))
      );
  }

  saveVehicle(vehicle: Vehicle) {
    return this.http.post<Vehicle>(this.vehiclesUrl, vehicle, this.httpOptions);
  }
}
