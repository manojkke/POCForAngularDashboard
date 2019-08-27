import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManojfirstComponent } from './manojfirst.component';

describe('ManojfirstComponent', () => {
  let component: ManojfirstComponent;
  let fixture: ComponentFixture<ManojfirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManojfirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManojfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
