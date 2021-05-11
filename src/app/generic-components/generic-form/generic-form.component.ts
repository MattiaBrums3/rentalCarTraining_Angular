import {Component, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {
  url: string;
  title: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url;

    if (this.url.includes('user') && this.url.includes('new')) {
      this.title = 'Nuovo Utente';
    }

    if (this.url.includes('user') && this.url.includes('edit')) {
      this.title = 'Modifica Utente';
    }

    if (this.url.includes('category') && this.url.includes('new')) {
      this.title = 'Nuova Categoria';
    }

    if (this.url.includes('category') && this.url.includes('edit')) {
      this.title = 'Modifica Categoria';
    }

    if (this.url.includes('vehicle') && this.url.includes('new')) {
      this.title = 'Nuovo Veicolo';
    }

    if (this.url.includes('vehicle') && this.url.includes('edit')) {
      this.title = 'Modifica Veicolo';
    }
  }

}
