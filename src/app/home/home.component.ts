import { Component } from '@angular/core';
import { TextAnimationComponent } from '../compenent-tools/text-animation/text-animation.component';
import { ReviewComponent } from '../review/review.component';
import { SolutionPiscineAnimationComponent } from '../compenent-tools/solution-piscine-animation/solution-piscine-animation.component';
import { Landing4Component } from '../landing4/landing4.component';
import { SavoirFaire4Component } from '../savoir-faire4/savoir-faire4.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports :  [SolutionPiscineAnimationComponent,TextAnimationComponent, Landing4Component, SavoirFaire4Component, ReviewComponent]

})
export class HomeComponent {


}
