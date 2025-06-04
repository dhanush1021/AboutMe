import { Component } from '@angular/core';
import { BioService } from '../../service/bio.service';
import { BioComponent } from '../Bio/bio/bio.component';
import { FooterComponent } from '../Footer/footer/footer.component';
import { HeaderComponent } from '../Header/header/header.component';
import { ProfileComponent } from '../Profile/profile/profile.component';
import { StrengthsWeaknessComponent } from '../strengths-weakness/strengths-weakness.component';
import { ProjectsComponentComponent } from '../Projects/projects-component/projects-component.component';

@Component({
  selector: 'app-home-component',
  imports: [HeaderComponent,FooterComponent,ProfileComponent,BioComponent,StrengthsWeaknessComponent,ProjectsComponentComponent],
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
