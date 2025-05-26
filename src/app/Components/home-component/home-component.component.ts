import { Component } from '@angular/core';
import { BioService } from '../../service/bio.service';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { BioComponent } from '../Bio/bio/bio.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../Footer/footer/footer.component';
import { HeaderComponent } from '../Header/header/header.component';
import { ProfileComponent } from '../Profile/profile/profile.component';
import { StrengthsWeaknessComponent } from '../strengths-weakness/strengths-weakness.component';

@Component({
  selector: 'app-home-component',
  imports: [HeaderComponent,FooterComponent,ProfileComponent,BioComponent,StrengthsWeaknessComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.scss'
})
export class HomeComponentComponent {
  constructor(private _bioservice: BioService){
  
    }
  
    ngOnInit(){
          this._bioservice.toCheckView.subscribe((res)=>{
        if(res){
          this.scrollToview();
        }
      })
    }
    scrollToview(){
      const curDiv = document.getElementById('temp');
      if(curDiv){
        curDiv.scrollIntoView({behavior:'smooth'})
      }
    }
}
