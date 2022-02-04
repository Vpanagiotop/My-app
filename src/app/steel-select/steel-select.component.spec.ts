import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteelSelectComponent } from './steel-select.component';

describe('SteelSelectComponent', () => {
  let component: SteelSelectComponent;
  let fixture: ComponentFixture<SteelSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteelSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteelSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
