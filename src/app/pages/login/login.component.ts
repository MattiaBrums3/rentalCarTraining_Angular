import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../services/auth/authentication.service';
import {first, ignoreElements} from 'rxjs/operators';
import {TokenStorageService} from '../../services/auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Welcome to Rental Car!';
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  superUser: string;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private tokenStorage: TokenStorageService) {}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      console.log('token ready');
    }
  }

  onSubmit() {
    this.authenticationService.login(this.form)
      .subscribe(
        data => {
          this.tokenStorage.saveToken(data.jwt);
          this.tokenStorage.saveUser(data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.superUser = this.tokenStorage.getUser().superUser;
          this.redirect();
        },
        error => {
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
        }
      );
  }

  redirect() {
    window.sessionStorage.setItem('role', this.tokenStorage.getUser().role);
    window.sessionStorage.setItem('id', this.tokenStorage.getUser().id);
    window.sessionStorage.setItem('name', this.tokenStorage.getUser().username);
    if (window.sessionStorage.getItem('role') === 'ROLE_ADMIN') {
      window.sessionStorage.setItem('token', 'jwt-token-admin');
      this.router.navigate(['admin/user']);
    } else {
      window.sessionStorage.setItem('token', 'jwt-token-customer');
      this.router.navigate(['user']);
    }
  }
}
