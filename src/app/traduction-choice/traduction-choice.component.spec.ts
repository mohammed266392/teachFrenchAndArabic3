import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraductionChoiceComponent } from './traduction-choice.component';

describe('TraductionChoiceComponent', () => {
  let component: TraductionChoiceComponent;
  let fixture: ComponentFixture<TraductionChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraductionChoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TraductionChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
