import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private user: AuthenticationService) { }

  ngOnInit() {
  }

  isUserLoggedIn() {
    return this.user.getUserLoggedIn();
  }

  logOut() {
    this.user.logOut();
  }

}
