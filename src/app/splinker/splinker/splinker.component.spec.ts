import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplinkerComponent } from './splinker.component';

describe('SplinkerComponent', () => {
  let component: SplinkerComponent;
  let fixture: ComponentFixture<SplinkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplinkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplinkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
