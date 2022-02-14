import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-page',
  templateUrl: './container-page.component.html',
  styleUrls: ['./container-page.component.scss']
})
export class ContainerPageComponent {
  @Input() public padding: '0px' | '300px' = '0px';
  @Input() public image!: string;
  @Input() public title!: string;
  @Input() public breadcrumb!: Array<{
    title: string;
    link: string;
  }>
  @Input() public items!: Array<{
    title: string;
    link: string;
  }>
}
