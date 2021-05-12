import { Component, OnInit } from '@angular/core';
import { Category} from '../../../models/category';
import { CATEGORYTABLE } from '../../../classes/my-configs';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {
  title = 'Lista Categorie';

  tableConfigCategories = CATEGORYTABLE;

  categories: Category[];

  constructor(private service: CategoryService) {
    this.service.getCategories()
      .subscribe(
        c => this.categories = c
      );
  }

  ngOnInit(): void {
  }
}
