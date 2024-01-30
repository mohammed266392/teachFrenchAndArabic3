import { NgClass } from '@angular/common';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-solution-piscine-animation',
  templateUrl: './solution-piscine-animation.component.html',
  styleUrls: ['./solution-piscine-animation.component.css'],
  standalone:true,
  imports:[NgClass]
})
export class SolutionPiscineAnimationComponent {
  active : boolean = false

  constructor(private el: ElementRef)  {}
  
  ngAfterViewInit() {
    console.log('texte animation ')
    const observer = new IntersectionObserver(entry => {
      console.log(entry)
        this.active=entry[0].isIntersecting;
    });
    
    observer.observe(this.el.nativeElement);
}

}
