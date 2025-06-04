import { Component } from '@angular/core';
import { HeaderComponent } from '../Header/header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  imports: [HeaderComponent,FormsModule,CommonModule],
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
    console.log('Name:', this.yourName);
    console.log('Email:', this.yourEmail);
    console.log('Message:', this.yourMessage);
  }
}