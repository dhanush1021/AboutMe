import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/Header/header/header.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import { ProfileComponent } from './Components/Profile/profile/profile.component';
import { BioComponent } from './Components/Bio/bio/bio.component';
import { StrengthsWeaknessComponent } from './Components/strengths-weakness/strengths-weakness.component';
import { BioService } from './service/bio.service';
import { ContactMeComponent } from './Components/contact-me/contact-me.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
