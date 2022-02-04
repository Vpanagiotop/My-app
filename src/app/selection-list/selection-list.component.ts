import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss']
})
export class SelectionListComponent {
  @Input() public placeholder = '--- select ---';
  @Input() public options!: string[];
  @Output() public valueChange = new EventEmitter<string>();
  @Input() public value!: string;
}
