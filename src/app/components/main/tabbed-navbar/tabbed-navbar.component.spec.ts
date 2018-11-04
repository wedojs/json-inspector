import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedNavbarComponent } from './tabbed-navbar.component';

describe('TabbedNavbarComponent', () => {
  let component: TabbedNavbarComponent;
  let fixture: ComponentFixture<TabbedNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbedNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabbedNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
