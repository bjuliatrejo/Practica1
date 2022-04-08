import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarnominaComponent } from './navbarnomina.component';

describe('NavbarnominaComponent', () => {
  let component: NavbarnominaComponent;
  let fixture: ComponentFixture<NavbarnominaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarnominaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarnominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
