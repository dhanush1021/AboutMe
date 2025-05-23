import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-strengths-weakness',
  imports: [CommonModule],
  templateUrl: './strengths-weakness.component.html',
  styleUrl: './strengths-weakness.component.scss'
})
export class StrengthsWeaknessComponent {
  rotationDirection: string = '';
  clickcount: number = 0;
  IsOtherElementsVanishing: boolean = false;
  toggleRotation() {
    this.clickcount++;
    this.rotationDirection = this.clickcount % 2 === 0 ? 'counterclockwise' : 'clockwise';
    this.IsOtherElementsVanishing = !this.IsOtherElementsVanishing;
    setTimeout(() => {
      this.rotationDirection = '';
    }, 600);
  }
}