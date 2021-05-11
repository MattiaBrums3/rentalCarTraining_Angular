import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  entity = 'users';
  action: string;
  objId: number;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.action = this.router.snapshot.url[0].path;

    if (this.action === 'edit') {
      this.objId = +this.router.snapshot.url[1].path;
    }
  }
}
