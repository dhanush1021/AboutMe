import { Component } from '@angular/core';
import { HeaderComponent } from '../Header/header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  imports: [HeaderComponent,FormsModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  yourName: string = '';
  yourEmail: string = '';
  yourMessage: string = '';
  submitted: boolean = false;
  ToEmail: string = 'dhanushdybala10@gmail.com';
  OnSubmit():void{
    this.submitted = true;
  }
}