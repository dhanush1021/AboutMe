import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() ShowCard: boolean = false;
   constructor(private router:Router) {}

   NavigateToTaskManagement(){
    this.router.navigate(['TaskManagementSystem']);
   }
}
