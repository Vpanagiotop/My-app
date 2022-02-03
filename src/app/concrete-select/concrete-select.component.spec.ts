import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteSelectComponent } from './concrete-select.component';

describe('ConcreteSelectComponent', () => {
  let component: ConcreteSelectComponent;
  let fixture: ComponentFixture<ConcreteSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcreteSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcreteSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
