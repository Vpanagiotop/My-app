import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBeamComponent } from './section-beam.component';

describe('SectionBeamComponent', () => {
  let component: SectionBeamComponent;
  let fixture: ComponentFixture<SectionBeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
