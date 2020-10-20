import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-number-container',
  templateUrl: './input-number-container.component.html',
  styleUrls: ['./input-number-container.component.css']
})
export class InputNumberContainerComponent implements OnInit {
  @Input() numberLabel: string = 'n/a';

  constructor() { }

  ngOnInit(): void {
  }

}
