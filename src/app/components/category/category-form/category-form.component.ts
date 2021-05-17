import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CATEGORYHEADERS} from '../../../configs/my-configs';
import {CategoryService} from '../../../services/category.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  entity = 'categories';
  action: string;
  object: any;

  constructor(private router: ActivatedRoute,
              private service: CategoryService,
              private location: Location) { }

  ngOnInit(): void {
    this.getAction();
    this.getObject();
  }

  getAction() {
    this.action = this.router.snapshot.url[0].path;
  }

  getObject() {
    if (this.action === 'new') {
      this.object = {typology: ''};
      this.object.keys = CATEGORYHEADERS;
    } else {
      const objId = +this.router.snapshot.url[1].path;
      this.service.getCategoryById(objId)
        .subscribe(o => {
          this.object = o;
          this.object.keys = CATEGORYHEADERS;
        });
    }
  }

  doOperation(action: any) {
    if (action === 'Salva' && !this.checkFields()) {
      alert('Completa tutti i campi.');
      return;
    }

    if (action === 'Salva') {
      this.service.saveCategory(this.object)
        .subscribe(
          () => this.goBack()
        );
    } else {
      this.goBack();
    }
  }

  checkFields() {
    // false if there is one empty field, true otherwise
    if (this.object.typology !== '') {
      return true;
    } else {
      return false;
    }
  }

  goBack() {
    this.location.back();
  }

}
