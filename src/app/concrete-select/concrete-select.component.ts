import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-concrete-select',
  templateUrl: './concrete-select.component.html',
  styleUrls: ['./concrete-select.component.scss']
})
export class ConcreteSelectComponent {
  @Input() public value!: string;
  @Output() public valueChange = new EventEmitter<string>();
  public options = ['C16/20', 'C20/25', 'C25/30', 'C30/37', 'C35/40', 'other'];
}