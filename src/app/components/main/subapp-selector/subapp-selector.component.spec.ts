import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubappSelectorComponent } from './subapp-selector.component';

describe('SubappSelectorComponent', () => {
  let component: SubappSelectorComponent;
  let fixture: ComponentFixture<SubappSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubappSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubappSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
