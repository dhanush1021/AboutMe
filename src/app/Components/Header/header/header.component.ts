import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private router: Router) { }

  onContactMeClick() {
    this.router.navigate(['ContactMe']);
  }

  onNameClick(){
    this.router.navigate(['home']);
  }
}
