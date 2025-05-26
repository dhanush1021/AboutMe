import { Component } from '@angular/core';
import { BioService } from '../../../service/bio.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  scrollToBoll : boolean = false;
  constructor(private _bioservice: BioService){

  }

  scrollTOview(){
    this.scrollToBoll = !this.scrollToBoll;
    this._bioservice.toCheckView.next(true);
  }
}
