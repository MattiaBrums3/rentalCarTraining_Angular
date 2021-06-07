import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/auth/authentication.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../../services/auth/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  id = sessionStorage.getItem('id');
  name = sessionStorage.getItem('name');
  token = sessionStorage.getItem('token');

  constructor(private service: AuthenticationService,
              private router: Router,
              private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }

  goToHomepage() {
    if (this.token === 'jwt-token-admin') {
      return this.router.navigate(['admin/user']);
    } else {
      return this.router.navigate(['user']);
    }

  }

  logout() {
    this.tokenStorage.logout();
    this.router.navigate(['login']);
  }

}
