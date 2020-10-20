import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterReplyModalComponent } from './register-reply-modal.component';

describe('RegisterReplyModalComponent', () => {
  let component: RegisterReplyModalComponent;
  let fixture: ComponentFixture<RegisterReplyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterReplyModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterReplyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
