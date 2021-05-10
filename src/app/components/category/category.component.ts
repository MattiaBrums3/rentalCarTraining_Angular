import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { CATEGORYTABLE } from '../../classes/my-configs';
import {AppService} from '../../app-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  title = 'Lista Categorie';

  tableConfigCategories = CATEGORYTABLE;

  categories: Category[];

  constructor(private service: AppService) {
    this.categories = this.service.getCategories();
  }

  ngOnInit(): void {
  }
}
