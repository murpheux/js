import { Component, OnInit } from '@angular/core';

import { AuthenticationService} from '.././authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private user: AuthenticationService) {

  	setTimeout(() => {
  		this.result = 50;
  	}, 10000);
  }

  ngOnInit() {
  }

  title = 'some app';
  visible = true;
  counter = 0;
  result = 1 + 1;
  username = "murpheux";

  

  myfavLang = {
  	'frontend' : ['html', 'css', 'javascript'],
  	'backend' : ['nodejs', 'php', 'python', 'ruby']
  }

  languages = [
  	{'name' : 'html', 'type' : 'frontend'},
  	{'name' : 'css', 'type' : 'frontend'},
  	{'name' : 'js', 'type' : 'frontend'},
  	{'name' : 'ruby', 'type' : 'backend'},
  	{'name' : 'python', 'type' : 'backend'},
  ];

  toggleDiv(){
  	this.visible = !this.visible;
    this.counter++; 
    
  }

  changeValue() {
  	this.result++;
  }

  myKeydown(event) {
    console.log("this was fired!", event);
  }

  changeUsername(event){
    this.username = event.target.value;
  }

}
