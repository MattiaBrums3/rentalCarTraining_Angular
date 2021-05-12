import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CATEGORYHEADERS} from '../../../classes/my-configs';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  entity = 'categories';
  action: string;
  object: any;
  objId: number;

  constructor(private router: ActivatedRoute) { }

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
    } else {
      this.objId = +this.router.snapshot.url[1].path;
      // search category by id in service
    }

    this.object.keys = CATEGORYHEADERS;
  }

}
