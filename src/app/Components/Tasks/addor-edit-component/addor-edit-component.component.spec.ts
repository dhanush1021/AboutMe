import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorEditComponentComponent } from './addor-edit-component.component';

describe('AddorEditComponentComponent', () => {
  let component: AddorEditComponentComponent;
  let fixture: ComponentFixture<AddorEditComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddorEditComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddorEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
