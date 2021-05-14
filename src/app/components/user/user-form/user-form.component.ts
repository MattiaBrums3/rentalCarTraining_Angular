import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {USERHEADERS} from '../../../configs/my-configs';
import {UserService} from '../../../services/user.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  entity = 'users';
  action: string;
  object: any;

  constructor(private router: ActivatedRoute,
              private service: UserService,
              private location: Location) { }

  ngOnInit(): void {
    this.getAction();
    this.getObject();
  }

  getAction() {
    this.action = this.router.snapshot.url[0].path;
  }

  getObject() {
    const date = new Date();
    this.object = {name: '', surname: '', dateOfBirth: date.toISOString(), fiscalCode: '',
                    username: '', password: ''};
    this.object.keys = USERHEADERS;

    if (this.action === 'edit') {
      const objId = +this.router.snapshot.url[1].path;
      this.service.getUserById(objId)
        .subscribe(o => {
          this.object = o;
          this.object.keys = USERHEADERS;
        });
    }
  }

  doOperation(action: any) {
    if (action === 'Salva') {
      this.service.saveUser(this.object)
        .subscribe(
          () => this.goBack()
        );
    } else {
      this.goBack();
    }
  }

  goBack() {
    this.location.back();
  }
}
