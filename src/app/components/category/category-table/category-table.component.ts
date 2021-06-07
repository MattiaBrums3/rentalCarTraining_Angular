import { Component, OnInit } from '@angular/core';
import { Category} from '../../../models/category';
import { CATEGORYTABLE } from '../../../configs/my-configs';
import {CategoryService} from '../../../services/category.service';
import {Location} from '@angular/common';
import {VehicleService} from '../../../services/vehicle.service';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {
  title = 'Lista Categorie';

  tableConfigCategories = CATEGORYTABLE;

  categories: Category[];

  constructor(private service: CategoryService,
              private vehicleService: VehicleService,
              private location: Location) {}

  ngOnInit(): void {
    this.service.getCategories()
      .subscribe(
        c => this.categories = c
      );
  }

  doOperation(event: any) {
    const action = event.action;

    if (action === 'Elimina') {
      this.vehicleService.getVehiclesByCategory(event.record.id)
        .subscribe(c => {
          if (c === null) {
            this.service.deleteCategory(event.record.id).subscribe(
              () => {
                alert('Categoria eliminata con successo.');
                this.goBack();
              }
            );
          } else {
            alert('Impossibile eliminare. Categoria associata ad uno o più veicoli.');
            this.goBack();
          }
        });


    }
  }

  goBack() {
    this.location.back();
  }
}
