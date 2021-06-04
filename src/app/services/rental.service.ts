import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Rental} from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private rentalsUrl = 'http://localhost:8080/api/rentals';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getRentals() {
    return this.http.get<Rental[]>(this.rentalsUrl);
  }

  getRentalById(id: number) {
    const url = `${this.rentalsUrl}/${id}`;
    return this.http.get<Rental>(url);
  }

  getRentalsByUser(idUser: number) {
    const url = `${this.rentalsUrl}/user/${idUser}`;
    return this.http.get<Rental[]>(url);
  }

  saveRental(rental: Rental) {
    return this.http.post<Rental>(this.rentalsUrl, rental, this.httpOptions);
  }

  deleteRental(id: number) {
    const url = `${this.rentalsUrl}/${id}`;
    return this.http.delete<Rental>(url, this.httpOptions);
  }
}
