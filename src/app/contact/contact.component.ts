import { Component } from '@angular/core';
import { EmailComponent } from '../email/email.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone:true,
  imports:[EmailComponent]
})
export class ContactComponent {

}
