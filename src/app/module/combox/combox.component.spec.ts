import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboxComponent } from './combox.component';

describe('ComboxComponent', () => {
  let component: ComboxComponent;
  let fixture: ComponentFixture<ComboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
