import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects-component',
  imports: [ProjectCardComponent,CommonModule],
  templateUrl: './projects-component.component.html',
  styleUrl: './projects-component.component.scss'
})
export class ProjectsComponentComponent {
  ShowProject: boolean = false;
  ToggleShowCardToTrue(){
    this.ShowProject = true;
  }
  ToggleShowCardToFalse(){
    this.ShowProject = false;
  }
}
