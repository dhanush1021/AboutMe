import { Component, Input } from '@angular/core';
import { TaskModel, TaskPriority, TaskStatus } from '../Model/task-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-cards-components',
  imports: [CommonModule],
  templateUrl: './task-cards-components.component.html',
  styleUrl: './task-cards-components.component.scss'
})
export class TaskCardsComponentsComponent extends TaskModel {
  @Input() Task: TaskModel = new TaskModel();
  Taskpriority: string = '';
  TaskStatus:string = '';
  ngOnInit(){
    this.Taskpriority = this.Task.Priority.toString();
    this.TaskStatus = this.Task.Status.toString();
    console.log("Task Details: ", JSON.stringify(this.Task));
  }
}
