import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextContainerComponent } from './input-text-container.component';

describe('InputTextContainerComponent', () => {
  let component: InputTextContainerComponent;
  let fixture: ComponentFixture<InputTextContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
