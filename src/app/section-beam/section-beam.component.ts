import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-section-beam',
  templateUrl: './section-beam.component.html',
  styleUrls: ['./section-beam.component.scss']
})
export class SectionBeamComponent {

  @Input() public value!: string;
  @Output() public valueChange = new EventEmitter<string>();
  public options = ['C16/20', 'C20/25', 'C25/30', 'C30/37', 'C35/40', 'other'];
  public params = {
  } as IParamters;
}
interface IParamters {
  diameterOfReinforcingBars: string;
}