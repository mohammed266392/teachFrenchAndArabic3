import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnFrenchComponent } from './learn-french.component';

describe('LearnFrenchComponent', () => {
  let component: LearnFrenchComponent;
  let fixture: ComponentFixture<LearnFrenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnFrenchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnFrenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
