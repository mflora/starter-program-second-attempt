import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEmailContainerComponent } from './input-email-container.component';

describe('InputEmailContainerComponent', () => {
  let component: InputEmailContainerComponent;
  let fixture: ComponentFixture<InputEmailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputEmailContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEmailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
