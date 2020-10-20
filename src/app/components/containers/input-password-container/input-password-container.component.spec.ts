import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPasswordContainerComponent } from './input-password-container.component';

describe('InputPasswordContainerComponent', () => {
  let component: InputPasswordContainerComponent;
  let fixture: ComponentFixture<InputPasswordContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPasswordContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPasswordContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
