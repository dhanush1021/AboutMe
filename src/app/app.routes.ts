import { Routes } from '@angular/router';
import { ContactMeComponent } from './Components/contact-me/contact-me.component';
import { HomeComponentComponent } from './Components/home-component/home-component.component';
import { TaskComponentComponent } from './Components/Tasks/task-component/task-component.component';

export const routes: Routes = [
    {path: '',component: HomeComponentComponent},
    {path: 'home', component: HomeComponentComponent},
    {path: 'ContactMe', component: ContactMeComponent},
    {path:"TaskManagementSystem", component: TaskComponentComponent}
];
