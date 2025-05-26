import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactMeComponent } from './Components/contact-me/contact-me.component';
import { HomeComponentComponent } from './Components/home-component/home-component.component';

export const routes: Routes = [
    {path: '',component: HomeComponentComponent},
    {path: 'home', component: HomeComponentComponent},
    {path: 'ContactMe', component: ContactMeComponent},
];
