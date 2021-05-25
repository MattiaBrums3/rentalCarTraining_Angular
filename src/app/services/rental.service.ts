import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Rental} from '../models/rental';
import {tap} from 'rxjs/operators';
import {InMemoryDataService} from './in-memory-data.service';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private rentalsUrl = 'api/rentals';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient,
              private inMemory: InMemoryDataService) { }

  getRentals() {
    return this.http.get<Rental[]>(this.rentalsUrl)
      .pipe(
        tap(_ => console.log('Fetched Rentals'))
      );
  }

  getRentalById(id: number) {
    const url = `${this.rentalsUrl}/${id}`;
    return this.http.get<Rental>(url)
      .pipe(
        tap(_ => console.log(`Fetched Rental ${id}`))
      );
  }

  getRentalsByUser(idUser: number) {
    return this.inMemory.getRentalsByUser(idUser);
  }

  saveRental(rental: Rental) {
    return this.http.post<Rental>(this.rentalsUrl, rental, this.httpOptions);
  }

  deleteRental(id: number) {
    const url = `${this.rentalsUrl}/${id}`;
    return this.http.delete<Rental>(url, this.httpOptions);
  }
}
