import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlouColor]'
})
export class BlouColorDirective {

  constructor(element: ElementRef) { 
  	//console.log(element.nativeElement);
  	element.nativeElement.style.color = "blue";
  }

  @HostListener('click') doSomething() {
  	alert('it works!');
  }

  @HostListener('document:click', ['$event'])
  	elementClicked(elem) {
  		console.log('clicked', elem);
  	}

  @HostListener('mouseenter') doEnter() {
  	console.log('mouse just enterted!');
  }

  @HostListener('mouseleave') doLeave() {
  	console.log('mouse just left!');
  }

  @HostListener('mousemove') doMove() {
  	console.log('mouse moved!');
  }


}
