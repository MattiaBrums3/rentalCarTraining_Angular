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

  getRentalsByUser(idUser: number) {
    return this.inMemory.getRentalsByUser(idUser);
  }
}
