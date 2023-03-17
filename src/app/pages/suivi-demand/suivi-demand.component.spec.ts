import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviDemandComponent } from './suivi-demand.component';

describe('SuiviDemandComponent', () => {
  let component: SuiviDemandComponent;
  let fixture: ComponentFixture<SuiviDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviDemandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiviDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
