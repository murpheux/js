import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visible = true;
  counter = 0;

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
}
