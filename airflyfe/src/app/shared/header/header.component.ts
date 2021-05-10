import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../core/auth/auth.service';
import {Role} from '../../core/data/role';
import {Userr} from '../../core/data/userr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: Userr;

  constructor(
    private router: Router,
    private authenticationService: AuthService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
    location.reload();
  }

  get isAdmin() {
    console.log(this.currentUser)
    return this.currentUser && this.currentUser.roles.includes(Role.Admin);
  }

  isLogged() {
    return localStorage.getItem('currentUser') !== null;
  }
}
