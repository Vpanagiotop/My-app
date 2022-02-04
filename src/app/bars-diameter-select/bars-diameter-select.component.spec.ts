import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarsDiameterComponent } from './bars-diameter-select.component';


describe('BarsDiameterComponent', () => {
  let component: BarsDiameterComponent;
  let fixture: ComponentFixture<BarsDiameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarsDiameterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarsDiameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
