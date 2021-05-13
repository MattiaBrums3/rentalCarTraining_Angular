import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {USERHEADERS} from '../../../classes/my-configs';
import {UserService} from '../../../services/user.service';

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
              private service: UserService) { }

  ngOnInit(): void {
    this.getAction();
    this.getObject();
  }

  getAction() {
    this.action = this.router.snapshot.url[0].path;
  }

  getObject() {
    this.object = {name: '', surname: '', dateOfBirth: new Date(), fiscalCode: '',
                    username: '', password: ''};

    if (this.action === 'edit') {
      const objId = +this.router.snapshot.url[1].path;
      this.service.getUserById(objId)
        .subscribe(o => this.object = o);
    }

    this.object.keys = USERHEADERS;
  }
}
