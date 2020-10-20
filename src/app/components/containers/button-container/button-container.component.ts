import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-container',
  templateUrl: './button-container.component.html',
  styleUrls: ['./button-container.component.css']
})
export class ButtonContainerComponent implements OnInit {
  @Input() buttonLabel: string = 'n/a';

  constructor() { }

  ngOnInit(): void {
  }

}
