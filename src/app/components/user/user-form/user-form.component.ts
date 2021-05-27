import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: UserService,
              private location: Location) { }

  ngOnInit(): void {
    this.getAction();
    this.getObject();
  }

  getAction() {
    this.action = this.route.snapshot.url[0].path;
  }

  getObject() {
    if (this.action === 'new') {
      const date = new Date();
      this.object = {name: '', surname: '', dateOfBirth: date.toISOString(), fiscalCode: '',
        superUser: false, username: '', password: ''};
      this.object.keys = USERHEADERS;
    } else {
      const objId = +this.route.snapshot.url[1].path;
      if (sessionStorage.getItem('token') !== 'jwt-token-admin' &&
        objId !== +sessionStorage.getItem('id')) {
        return this.router.navigate(['access-denied']);
      }
      this.service.getUserById(objId)
        .subscribe(o => {
          this.object = o;
          this.object.keys = USERHEADERS;
        });
    }
  }

  doOperation(action: any) {
    if (action === 'Salva' && !this.checkFields()) {
      alert('Completa tutti i campi.');
      return;
    }

    if (action === 'Salva') {
      delete this.object.keys;
      this.service.saveUser(this.object)
        .subscribe(
          () => this.goBack()
        );
    } else {
      this.goBack();
    }
  }

  checkFields() {
    // false if there is one empty field, true otherwise
    if (this.object.name !== '' && this.object.surname !== '' && this.object.dateOfBirth !== ''
      && this.object.fiscalCode && this.object.username !== '' && this.object.password) {
      return true;
    } else {
      return false;
    }
  }

  goBack() {
    this.location.back();
  }
}
