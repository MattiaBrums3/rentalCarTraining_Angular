import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RENTALHEADERS} from '../../../configs/my-configs';
import {Location} from '@angular/common';
import {RentalService} from '../../../services/rental.service';

@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrls: ['./rental-form.component.css']
})
export class RentalFormComponent implements OnInit {
  entity = 'rentals';
  action: any;
  object: any;

  constructor(private router: ActivatedRoute,
              private location: Location,
              private rentalService: RentalService) { }

  ngOnInit(): void {
    this.getAction();
    this.getObject();
  }

  getAction() {
    this.action = this.router.snapshot.url[2].path;
  }

  getObject() {
    if (this.action === 'new') {
      const idUser = +sessionStorage.getItem('id');
      const idVehicle = this.router.snapshot.url[1].path;
      console.log(idVehicle);
      this.object = {idUser, idVehicle, dateStart: '', dateEnd: '', approved: false};
      this.object.keys = RENTALHEADERS;
    }
  }

  doOperation(action: any) {
    if (action === 'Salva' && !this.checkFields()) {
      alert('Completa tutti i campi.');
      return;
    }

    if (action === 'Salva') {
      this.rentalService.saveRental(this.object)
        .subscribe(
          () => this.goBack()
          );
    } else {
      this.goBack();
    }
  }

  checkFields() {
    if (this.object.dateStart !== '' && this.object.dateEnd !== '') {
      return true;
    } else {
      return false;
    }
  }

  goBack() {
    this.location.back();
  }
}
