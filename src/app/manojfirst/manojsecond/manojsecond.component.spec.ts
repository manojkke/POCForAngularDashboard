import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManojsecondComponent } from './manojsecond.component';

describe('ManojsecondComponent', () => {
  let component: ManojsecondComponent;
  let fixture: ComponentFixture<ManojsecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManojsecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManojsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
