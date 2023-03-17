import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejeteesComponent } from './rejetees.component';

describe('RejeteesComponent', () => {
  let component: RejeteesComponent;
  let fixture: ComponentFixture<RejeteesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejeteesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejeteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
