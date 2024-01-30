import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionPiscineAnimationComponent } from './solution-piscine-animation.component';

describe('TextAnimationComponent', () => {
  let component: SolutionPiscineAnimationComponent;
  let fixture: ComponentFixture<SolutionPiscineAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionPiscineAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionPiscineAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
