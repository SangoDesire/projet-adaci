import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandEncoursComponent } from './demand-encours.component';

describe('DemandEncoursComponent', () => {
  let component: DemandEncoursComponent;
  let fixture: ComponentFixture<DemandEncoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandEncoursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandEncoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
