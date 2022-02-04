import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bars-diameter-select',
  templateUrl: './bars-diameter-select.component.html',
  styleUrls: ['./bars-diameter-select.component.scss']
})
export class BarsDiameterComponent {
  @Input() public value!: string;
  @Output() public valueChange = new EventEmitter<string>();
  public options = ['Ø8', 'Ø10', 'Ø12', 'Ø14', 'Ø16', 'Ø18', 'Ø20', 'other']
}
