import { Component, Input } from '@angular/core';
import { structuralItems } from 'src/common/structuralItems';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent {
  public title = 'Structural';
  @Input() public breadcrumb = [
    { title: 'Applications', link: '/home' }]
  public items = structuralItems;
}
