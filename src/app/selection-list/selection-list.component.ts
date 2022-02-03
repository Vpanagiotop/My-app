import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
const DEFAULT_OPTION = '--- Select ---';

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss']
})
export class SelectionListComponent implements OnInit {
  // public list: any;
  @Input() public placeholder = '--- select ---';
  @Input() public options!: string[];
  @Output() public valueChange = new EventEmitter<string>();
  @Input() public value!: string;
  public selected: any;
  public params = {

  } as IParamters;
  public concreteTypeList = ['C16/20', 'C20/25', 'C25/30', 'C30/37', 'C35/40', 'other'];
  public steelTypeList = ['B500c', 'B500a', 'B500b', 'S220', 'S400', 'S500', 'S400s', 'S500s', 'other'];
  public async ngOnInit() {
    const x = 1;
  }
}
interface IParamters {
  concreteTypeList: string;
  steelTypeList: string;
}