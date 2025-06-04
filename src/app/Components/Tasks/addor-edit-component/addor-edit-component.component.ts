import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, output, Output } from '@angular/core';
import flatpickr from 'flatpickr';
import { TaskModel, TaskPriority, TaskStatus } from '../Model/task-model';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { EventEmitter } from 'node:stream';
import { BioService } from '../../../service/bio.service';

@Component({
  selector: 'app-addor-edit-component',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './addor-edit-component.component.html',
  styleUrls: ['./addor-edit-component.component.scss'],
})
export class AddorEditComponentComponent implements AfterViewInit{
  CancelTaskCreation = output();
  IsTitleInputTouched:boolean = false;
  formGroup!: FormGroup; 
  NewTask: TaskModel = new TaskModel();

  constructor(private fb:FormBuilder, private _bioService: BioService){  }
  ngOnInit(){
      this.formGroup = this.fb.group({
      title: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
      description: new FormControl('',[Validators.maxLength(500)]),
      startDate: new FormControl('',[Validators.required]),
      dueDate: new FormControl('',[Validators.required]),
      priority: new FormControl(TaskPriority[1]),
      status: new FormControl(TaskStatus[1]),
      tags: new FormControl(''),
      targetDate: new FormControl('')
    });
     this.formGroup.get('title')?.valueChanges.subscribe(value => {
      
    });
    this.formGroup.get('startDate')?.valueChanges.subscribe(value=>{
      if(value != null && value != ''){
        flatpickr("#dueDatePicker",{
        dateFormat: "d-m-Y",
        minDate: this.formGroup.get('targetDate')?.value || value || 'today',
      });
      flatpickr("#targetDatePicker",{
        dateFormat: "d-m-Y",
        minDate: value,
        maxDate: this.formGroup.get('dueDate')?.value || 'today'
      });
      }  
    })
    this.formGroup.get('dueDate')?.valueChanges.subscribe(value=>{
      if(value != null && value != ''){
        this.formGroup.get('targetDate')?.setValue(value);
        flatpickr("#targetDatePicker",{
          dateFormat: "d-m-Y",
          maxDate: value,
          minDate: this.formGroup.get('startDate')?.value || 'today'
        });
        flatpickr("#startDatePicker",{
          dateFormat: "d-m-Y",
          maxDate: value,
          minDate: 'today'
        });
      }
    })
    this.formGroup.get('targetDate')?.valueChanges.subscribe(value=>{
      if(value != null && value != ''){
        flatpickr("#startDatePicker",{
          dateFormat: "d-m-Y",
          maxDate: value,
          minDate: 'today'
        });
        flatpickr("#dueDatePicker",{
          dateFormat: "d-m-Y",
          minDate: value,
        });
      }
    });
  }

  Priorityoptions: { value: string; label: string }[] = [
    { value: TaskPriority[1], label: 'Low' },
    { value: TaskPriority[2], label: 'Medium' },
    { value: TaskPriority[3], label: 'High' },
    { value: TaskPriority[4], label: 'Critical' },
  ];

  Statusoptions: { value: string; label: string }[] = [
    {value: TaskStatus[1], label: 'Not Started'},
    {value: TaskStatus[2], label: 'In Progress'},
    {value: TaskStatus[3], label: 'Completed'},
    {value: TaskStatus[4], label: 'On Hold'},
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      flatpickr("#startDatePicker",{
        dateFormat: "d-m-Y",
        minDate: "today"
      });
      flatpickr("#dueDatePicker",{
        dateFormat: "d-m-Y",
        minDate: "today"
      });
      flatpickr("#targetDatePicker",{
        dateFormat: "d-m-Y",
        minDate: "today"
      });
    }, 100)
  }

  CancelTaskCreationOnClick() {
    this.CancelTaskCreation.emit();
  }
  Onsubmit(){
    console.log(this.formGroup.value);
    if (this.formGroup.valid) {
      console.log('Valid Form Submitted:', this.formGroup.value);
      this.NewTask = {
        Name: this.formGroup.get('title')?.value,
        Description: this.formGroup.get('description')?.value,
        StartDate: this.formGroup.get('startDate')?.value,
        DueDate: this.formGroup.get('dueDate')?.value,
        Priority: this.formGroup.get('priority')?.value,
        Status: this.formGroup.get('status')?.value,
        Tags: this.formGroup.get('tags')?.value,
        TargetDate: this.formGroup.get('targetDate')?.value,
        CreatedDate: new Date()
      };
      console.log('New Task Created:', this.NewTask);
      this.CreateTask();
    }
  }
  CreateTask(){
      this._bioService.CreateNewTask.next(this.NewTask);
  }
}
