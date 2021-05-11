import {Component, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.css']
})
export class GenericFormComponent implements OnInit {
  url: string;
  entity: string;
  title: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.url = this.router.url;

    if (this.url.includes('user')) {
      this.entity = 'user';

      if (this.url.includes('new')) {
        this.title = 'Nuovo Utente';
      } else if (this.url.includes('edit')) {
        this.title = 'Modifica Utente';
      }
    }

    if (this.url.includes('category')) {
      this.entity = 'category';

      if (this.url.includes('new')) {
        this.title = 'Nuova Categoria';
      } else if (this.url.includes('edit')) {
        this.title = 'Modifica Categoria';
      }
    }

    if (this.url.includes('vehicle')) {
      this.entity = 'vehicle';

      if (this.url.includes('new')) {
        this.title = 'Nuovo Veicolo';
      } else if (this.url.includes('edit')) {
        this.title = 'Modifica Veicolo';
      }
    }
  }

}
