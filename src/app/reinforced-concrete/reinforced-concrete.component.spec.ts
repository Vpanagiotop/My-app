import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinforcedConcreteComponent } from './reinforced-concrete.component';

describe('ReinforcedConcreteComponent', () => {
  let component: ReinforcedConcreteComponent;
  let fixture: ComponentFixture<ReinforcedConcreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinforcedConcreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinforcedConcreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
