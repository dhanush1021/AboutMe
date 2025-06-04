import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskModel } from '../Components/Tasks/Model/task-model';

@Injectable({
  providedIn: 'root'
})
export class BioService {

  toCheckView  = new BehaviorSubject<boolean>(false);
  constructor() { }
  CreateNewTask = new BehaviorSubject<any>(null);
}
