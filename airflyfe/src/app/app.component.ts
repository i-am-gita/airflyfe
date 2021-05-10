import {Component} from '@angular/core';
import {Userr} from './core/data/userr';
import {Router} from '@angular/router';
import {AuthService} from './core/auth/auth.service';
import {Role} from './core/data/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'airflyfe';
  currentUser: Userr;

  constructor(
    private router: Router,
    private authenticationService: AuthService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.roles.includes(Role.Admin)
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
