export class TaskModel {
    Name: string = '';
    Description: string = '';
    StartDate: Date = new Date();
    DueDate: Date = new Date();
    Priority: TaskPriority = TaskPriority.Low;
    Status: TaskStatus = TaskStatus.NotStarted;
    Tags:string = '';
    TargetDate: Date = new Date();
    CreatedDate: Date = new Date();
}
export enum TaskPriority {
    Low = 1,
    Medium = 2,
    High = 3,
    Critical = 4
}
export enum TaskStatus {
    NotStarted = 1,
    InProgress = 2,
    Completed = 3,
    OnHold = 4
}