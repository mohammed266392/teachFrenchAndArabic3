import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoirFaire3Component } from './savoir-faire3.component';

describe('SavoirFaire3Component', () => {
  let component: SavoirFaire3Component;
  let fixture: ComponentFixture<SavoirFaire3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SavoirFaire3Component]
})
    .compileComponents();

    fixture = TestBed.createComponent(SavoirFaire3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
