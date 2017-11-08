import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService} from '.././authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user: AuthenticationService) { }

  ngOnInit() {
  }

  loginUser(ev) {
    ev.preventDefault();
    var username = ev.target.elements[0].value;
    var password = ev.target.elements[1].value;

    //console.log(event);
    //console.log(username, password);

    if (username == 'admin' && password == 'admin') {
      this.user.setUserLoggedIn('admin');
      this.router.navigate(['dashboard']);
    }

    //return false;
  }

}
