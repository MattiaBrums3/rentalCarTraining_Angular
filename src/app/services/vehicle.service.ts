import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Vehicle} from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vehiclesUrl = 'http://localhost:8080/vehicles';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getVehicles() {
    const url = `${this.vehiclesUrl}/get/all`;
    return this.http.get<Vehicle[]>(url);
  }

  getVehicleById(id: number) {
    const url = `${this.vehiclesUrl}/get/${id}`;
    return this.http.get<Vehicle>(url);
  }

  getVehiclesByCategory(id: number) {
    const url = `${this.vehiclesUrl}/get-by-category/${id}`;
    return this.http.get<Vehicle[]>(url);
  }

  saveVehicle(vehicle: Vehicle) {
    const url = `${this.vehiclesUrl}/post/edit`;
    return this.http.post<Vehicle>(url, vehicle, this.httpOptions);
  }

  deleteVehicle(id: number) {
    const url = `${this.vehiclesUrl}/delete/${id}`;
    return this.http.delete<Vehicle>(url, this.httpOptions);
  }
}
