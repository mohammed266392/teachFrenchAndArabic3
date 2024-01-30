import { Component, ElementRef, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-savoir-faire2',
    templateUrl: './savoir-faire2.component.html',
    styleUrls: ['./savoir-faire2.component.css'],
    standalone: true,
    imports: [NgClass, NgFor]
})
export class SavoirFaire2Component implements OnInit {

  visible : boolean = false;
  imageBlock1 = "./../../assets/images/cuisine_marbre_blanc1.jpg"


  images = [{
    id:1,
    src:"./../../assets/images/marbre_escalier2.png",
    icon:"./../../assets/images/icons-escaliers.png",
    title:"Escaliers",
    description:"une escaliers en pierre raconte quelque chose. Il apportera une âme à votre intérieure et s'embellira avec le temps."
  },{
  id:2,
  src:"./../../assets/images/marbre_decoration.png",
  icon:"./../../assets/images/icon_decoration.png",
  title:"Décoration",
  description:"décoration en pierre naturelle :  Margelles, dallage, revêtement mural, cheminées.."
}]

  constructor(private el: ElementRef)  {}
  
  ngAfterViewInit() {
      console.log('1 ')
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              console.log('2 : ',entry)
          this.visible=entry.isIntersecting;
          });
      });
      
      observer.observe(this.el.nativeElement);
  }
  ngOnInit(): void {
  }
}
