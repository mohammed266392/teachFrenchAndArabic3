import { Component, ElementRef, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { ObjectService } from '../object';
import { Router } from '@angular/router';

@Component({
    selector: 'app-savoir-faire5',
    templateUrl: './savoir-faire5.component.html',
    styleUrls: ['./savoir-faire5.component.css'],
    standalone: true,
    imports: [NgClass, NgFor, NgIf]
})
export class SavoirFaire5Component {
  visible :boolean=false;
  presentiel = "./../../assets/images/presentiel.svg"
  distanciel = "./../../assets/images/distanciel.svg"


  blocs : JeVeuxApprendre[] = [
    new JeVeuxApprendre(0,"Je veux apprendre la langue arabe","si vous parlez le français","learn-arabic",
    ["./../../assets/images/france.svg", "./../../assets/images/canada.svg", "./../../assets/images/pays-bas.svg", "./../../assets/images/suisse.svg", "./../../assets/images/belgique.svg"]),
    new JeVeuxApprendre(1,"أريد أن أتعلم اللغة الفرنسية","إذا كنت تتحدث الفرنسية","learn-french",
    ["./../../assets/images/emirats.svg","./../../assets/images/koweit.svg","./../../assets/images/qatar.svg", "./../../assets/images/palestine.svg", "./../../assets/images/maroc.svg","./../../assets/images/lybie.svg", "./../../assets/images/algerie.svg","./../../assets/images/arabie-saoudite.svg","./../../assets/images/egypte.svg","./../../assets/images/jordanie.svg","./../../assets/images/liban.svg","./../../assets/images/tunisie.svg"])

  ]



  constructor(private el: ElementRef, private router : Router)  {}
  
  ngAfterViewInit() {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              console.log('2 : ',entry)
          this.visible=entry.isIntersecting;
          });
      });
      observer.observe(this.el.nativeElement);
  }
  navigateTo(value : JeVeuxApprendre){
    this.router.navigateByUrl("/"+value.url)
  }

}

export class JeVeuxApprendre{
  constructor( public id : number,
      public title : string,
      public detail : string,
      public url : string,
      public flags : string[]){}
}