import { Component } from '@angular/core';
import { TextAnimationComponent } from '../compenent-tools/text-animation/text-animation.component';
import { ReviewComponent } from '../review/review.component';
import { SolutionPiscineAnimationComponent } from '../compenent-tools/solution-piscine-animation/solution-piscine-animation.component';
import { SavoirFaire3Component } from '../savoir-faire3/savoir-faire3.component';
import { Landing4Component } from '../landing4/landing4.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:true,
  imports :  [SolutionPiscineAnimationComponent,TextAnimationComponent, Landing4Component, SavoirFaire3Component, ReviewComponent]

})
export class HomeComponent {


}
