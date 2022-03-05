import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinforcedConcreteContentsComponent } from './reinforced-concrete-contents.component';

describe('ReinforcedConcreteContentsComponent', () => {
  let component: ReinforcedConcreteContentsComponent;
  let fixture: ComponentFixture<ReinforcedConcreteContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReinforcedConcreteContentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinforcedConcreteContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
