import { NgClass } from '@angular/common';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-text-animation',
  templateUrl: './text-animation.component.html',
  styleUrls: ['./text-animation.component.css'],
  standalone:true,
  imports:[NgClass]
})
export class TextAnimationComponent {
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
