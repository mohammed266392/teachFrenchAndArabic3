import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirFaire2Component } from './savoir-faire2.component';

describe('SavoirFaire2Component', () => {
  let component: SavoirFaire2Component;
  let fixture: ComponentFixture<SavoirFaire2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SavoirFaire2Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(SavoirFaire2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
