import { Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-password-container',
  templateUrl: './input-password-container.component.html',
  styleUrls: ['./input-password-container.component.css'],
})
export class InputPasswordContainerComponent implements OnInit {
  passwordLabel: string = 'n/a';
  @Output() content: string = 'n/a';

  constructor() {}

  ngOnInit(): void {}

  hide = true;
}
