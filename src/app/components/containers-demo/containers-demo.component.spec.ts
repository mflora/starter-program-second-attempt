import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersDemoComponent } from './containers-demo.component';

describe('ContainersDemoComponent', () => {
  let component: ContainersDemoComponent;
  let fixture: ComponentFixture<ContainersDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainersDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainersDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
