import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarRCComponent } from './side-bar-rc.component';

describe('SideBarRCComponent', () => {
  let component: SideBarRCComponent;
  let fixture: ComponentFixture<SideBarRCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarRCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarRCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
