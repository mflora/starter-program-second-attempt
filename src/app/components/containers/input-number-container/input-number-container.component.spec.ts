import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberContainerComponent } from './input-number-container.component';

describe('InputNumberContainerComponent', () => {
  let component: InputNumberContainerComponent;
  let fixture: ComponentFixture<InputNumberContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputNumberContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNumberContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
