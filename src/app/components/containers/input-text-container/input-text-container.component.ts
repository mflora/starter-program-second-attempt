import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text-container',
  templateUrl: './input-text-container.component.html',
  styleUrls: ['./input-text-container.component.css']
})
export class InputTextContainerComponent implements OnInit {
  @Input() simpleInputLabel: string = "n/a";
  constructor() { }

  ngOnInit(): void {
  }

}
