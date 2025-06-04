import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCardsComponentsComponent } from './task-cards-components.component';

describe('TaskCardsComponentsComponent', () => {
  let component: TaskCardsComponentsComponent;
  let fixture: ComponentFixture<TaskCardsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCardsComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCardsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
