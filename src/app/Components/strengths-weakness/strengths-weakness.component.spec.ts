import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthsWeaknessComponent } from './strengths-weakness.component';

describe('StrengthsWeaknessComponent', () => {
  let component: StrengthsWeaknessComponent;
  let fixture: ComponentFixture<StrengthsWeaknessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrengthsWeaknessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrengthsWeaknessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
