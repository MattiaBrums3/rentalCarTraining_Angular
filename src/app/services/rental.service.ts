import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Rental} from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private rentalsUrl = 'http://localhost:8080/rentals';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getRentals() {
    const url = `${this.rentalsUrl}/get/all`;
    return this.http.get<Rental[]>(url);
  }

  getRentalById(id: number) {
    const url = `${this.rentalsUrl}/get/${id}`;
    return this.http.get<Rental>(url);
  }

  getRentalsByUser(idUser: number) {
    const url = `${this.rentalsUrl}/get-by-user/${idUser}`;
    return this.http.get<Rental[]>(url);
  }

  getRentalsByVehicle(idVehicle: number) {
    const url = `${this.rentalsUrl}/get-by-vehicle/${idVehicle}`;
    return this.http.get<Rental[]>(url);
  }

  saveRental(rental: Rental) {
    const url = `${this.rentalsUrl}/post/edit`;
    return this.http.post<Rental>(url, rental, this.httpOptions);
  }

  deleteRental(id: number) {
    const url = `${this.rentalsUrl}/delete/${id}`;
    return this.http.delete<Rental>(url, this.httpOptions);
  }
}
