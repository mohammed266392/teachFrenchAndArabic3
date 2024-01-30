import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngletsMobileComponent } from './onglets-mobile.component';

describe('OngletsMobileComponent', () => {
  let component: OngletsMobileComponent;
  let fixture: ComponentFixture<OngletsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [OngletsMobileComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(OngletsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
