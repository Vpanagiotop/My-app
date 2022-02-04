import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-steel-select',
  templateUrl: './steel-select.component.html',
  styleUrls: ['./steel-select.component.scss']
})
export class SteelSelectComponent {
  @Input() public value!: string;
  @Output() public valueChange = new EventEmitter<string>();
  public options = ['B500c', 'B500a', 'B500b', 'S220', 'S400', 'S500', 'S400s', 'S500s', 'other'];
}