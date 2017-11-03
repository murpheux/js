import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	name = 'Murpheux Melony';
	DOW = ['Monday', 'Tuesday', 'Wednesday'];
	heroes = [
    	{id: 1, name:'Superman'},
    	{id: 2, name:'Batman'},
    	{id: 5, name:'BatGirl'},
    	{id: 3, name:'Robin'},
    	{id: 4, name:'Flash'}
	];

  constructor() { }

  ngOnInit() {
  }

}
