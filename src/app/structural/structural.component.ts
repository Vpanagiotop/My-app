import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent {
  public title = 'Structural';
  @Input() public breadcrumb = [
    { title: 'Applications', link: '/home' }]
  public items = [
    { title: 'Reinforced Concrete', link: '/reinforced-concrete' },
    { title: 'Steel', link: '/home' },
    { title: 'Actions', link: '/home' }
  ]
}
