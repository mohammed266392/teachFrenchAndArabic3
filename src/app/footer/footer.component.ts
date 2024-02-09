import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone:true,
})
export class FooterComponent {
  nameAndCopyRight = "Teach French & Arabic © 2024"
  number = "+971 50 386 0813"
  email = "ouiam.bari97@gmail.com"
  localisation = "Dubaï, United Arab Emirates"

}
