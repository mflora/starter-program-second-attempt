import { Component, Input, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-input-email-container',
  templateUrl: './input-email-container.component.html',
  styleUrls: ['./input-email-container.component.css']
})
export class InputEmailContainerComponent implements OnInit {
  @Input() emailLabel: string = 'n/a';

  constructor() { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
