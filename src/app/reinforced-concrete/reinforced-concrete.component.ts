import { Component, Input } from '@angular/core';
import { reinforcedConcreteItems } from 'src/common/reinforcedConcreteItems';
@Component({
  selector: 'app-reinforced-concrete',
  templateUrl: './reinforced-concrete.component.html',
  styleUrls: ['./reinforced-concrete.component.scss']
})
export class ReinforcedConcreteComponent {

  @Input() public title = 'Reinforced Concrete';
  @Input() public breadcrumb = [
    { title: 'Applications', link: '/home' },
    { title: 'Structural', link: '/structural' }
  ]
  public items = reinforcedConcreteItems
  public sidebarPanels = [
    {
      title: 'Flexural design of RC Column',
      titleLink: '/home',
      items: [
        { text: 'Confining Reinforcement', link: '/kapou' },
        { text: 'Flexural design of RC Column', link: '/home' }
      ]
    },
    {
      title: 'Moment curcuture analisys',
      titleLink: '/home',
      items: [
        { text: 'Flexural design of RC Column', link: '/home' }
      ]
    }
  ]

}
