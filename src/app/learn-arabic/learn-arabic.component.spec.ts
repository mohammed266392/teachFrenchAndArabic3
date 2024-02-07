import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnArabicComponent } from './learn-arabic.component';

describe('LearnArabicComponent', () => {
  let component: LearnArabicComponent;
  let fixture: ComponentFixture<LearnArabicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnArabicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearnArabicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
