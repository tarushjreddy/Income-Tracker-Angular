import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggelComponent } from './toggel.component';

describe('ToggelComponent', () => {
  let component: ToggelComponent;
  let fixture: ComponentFixture<ToggelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
