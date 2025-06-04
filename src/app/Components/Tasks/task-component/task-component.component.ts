import { Component } from '@angular/core';
import { HeaderComponent } from '../../Header/header/header.component';
import { FooterComponent } from '../../Footer/footer/footer.component';
import { CommonModule } from '@angular/common';
import { TaskModel, TaskPriority, TaskStatus } from '../Model/task-model';
import { AddorEditComponentComponent } from '../addor-edit-component/addor-edit-component.component';
import { TaskCardsComponentsComponent } from '../task-cards-components/task-cards-components.component';
import { BioService } from '../../../service/bio.service';
import { json } from 'node:stream/consumers';

@Component({
  selector: 'app-task-component',
  imports: [HeaderComponent,FooterComponent,CommonModule,AddorEditComponentComponent,TaskCardsComponentsComponent,CommonModule],
  templateUrl: './task-component.component.html',
  styleUrl: './task-component.component.scss'
})
export class TaskComponentComponent  {
  CreationOfTask: boolean = false;
  TaskList: TaskModel[] = [];
  //task : TaskModel = new TaskModel();
  constructor(private _bioService: BioService) {}

  TaskCancelled(event:any) {
    this.CreationOfTask = false;
  }
  
  ngOnInit() {
    // this.task.Name = "Task Title";
    // this.task.Description = "Task Description goes here Bro CAn you do itjsdfsvhavcksajdvchsdavchjvadschjasvchasadsv dvcsjdvha djsacvhsdajvh dsajhcvsdajjsdv dsjvchdsd sdsddsd s ds d dc d d d d d cdiudcbdiusabcdas sidghsiucdgiuds dsiugcdsiudcbiubsda dsiuchdiudsbiudsbia dciubdiudbiuds idubcdiuhdciu uihdciuhiuhdciuhcdiu";
    // this.task.DueDate = new Date();
    // this.task.Priority = TaskPriority.High;
    // this.task.CreatedDate = new Date();
    // this.task.TargetDate = new Date();
    // this.task.Status = TaskStatus.InProgress;
    // this.task.StartDate = new Date();
    // this.task.Tags = "Tag";
    // this.TaskList.push(this.task);
    this._bioService.CreateNewTask.subscribe((res: TaskModel) => {
      if (res) {
        console.log("New Task Created", JSON.stringify(res));
        this.TaskList.push(res);
        this.CreationOfTask = false;
      }
    });
  }
}
