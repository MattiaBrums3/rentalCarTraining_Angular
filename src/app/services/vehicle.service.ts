import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Vehicle} from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vehiclesUrl = 'http://localhost:8080/api/vehicles';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getVehicles() {
    return this.http.get<Vehicle[]>(this.vehiclesUrl);
  }

  getVehicleById(id: number) {
    const url = `${this.vehiclesUrl}/${id}`;
    return this.http.get<Vehicle>(url);
  }

  saveVehicle(vehicle: Vehicle) {
    return this.http.post<Vehicle>(this.vehiclesUrl, vehicle, this.httpOptions);
  }

  deleteVehicle(id: number) {
    const url = `${this.vehiclesUrl}/${id}`;
    return this.http.delete<Vehicle>(url, this.httpOptions);
  }
}
