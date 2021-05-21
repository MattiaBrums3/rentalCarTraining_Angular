import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Rental} from '../models/rental';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  private rentalsUrl = 'api/rentals';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getRentalsByUser(idUser: number) {
    const url = `api/rentals/${idUser}`;
    return this.http.get<Rental[]>(url)
      .pipe(
        tap(_ => console.log(`Fetched Rentals of User ${idUser}`))
      );
  }
}
