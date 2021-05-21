import { Component, OnInit } from '@angular/core';
import {RENTALTABLE} from '../../../configs/my-configs';
import {Rental} from '../../../models/rental';
import {RentalService} from '../../../services/rental.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rental-table',
  templateUrl: './rental-table.component.html',
  styleUrls: ['./rental-table.component.css']
})
export class RentalTableComponent implements OnInit {
  title = 'Lista Prenotazioni';

  tableConfigRental = RENTALTABLE;

  rentals: Rental[];

  constructor(private service: RentalService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    const idUser = +this.router.snapshot.url[1].path;
    this.service.getRentalsByUser(idUser)
      .subscribe(
        r => {
          this.rentals = r;
          console.log(this.rentals);
        }
      );
  }

  doOperation(action: any) {

  }

}
