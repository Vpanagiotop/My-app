import { Component, Input } from '@angular/core';
import { reinforcedConcreteItems } from 'src/common/reinforcedConcreteItems';

@Component({
  selector: 'app-reinforced-concrete-contents',
  templateUrl: './reinforced-concrete-contents.component.html',
  styleUrls: ['./reinforced-concrete-contents.component.scss']
})
export class ReinforcedConcreteContentsComponent {
  @Input() public title = 'Reinforced Concrete';
  @Input() public breadcrumb = [
    { title: 'Applications', link: '/home' },
    { title: 'Structural', link: '/structural' }
  ]
  public items = reinforcedConcreteItems
}
