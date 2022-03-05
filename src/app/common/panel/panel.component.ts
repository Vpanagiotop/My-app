import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements AfterViewInit, OnDestroy {
  @ViewChild('header') public header!: ElementRef<HTMLDivElement>;
  @ViewChild('content') public content!: ElementRef<HTMLDivElement>;
  @Input() public title!: string;
  @Input() public state: 'open' | 'closed' = 'open';
  @Input() public iconCollapsed = 'expand_more';
  @Input() public iconExpanded = 'expand_less';
  @Input() public fontSize = '18px';
  @Input() public titleLink?: string;
  private resizeObserver?: ResizeObserver;
  public constructor(private element: ElementRef<HTMLElement>) { }
  public ngAfterViewInit() {
    this.updateHeight();
    this.enableTransitionsOnNextTick();
    this.registerHeightChangeListener();
  }
  public ngOnDestroy() {
    this.resizeObserver?.disconnect();
  }
  public toggle() {
    if (this.state === 'open') {
      this.close();
    } else {
      this.open();
    }
  }
  private enableTransitionsOnNextTick() {
    setTimeout(() => {
      this.element.nativeElement.style.transition = 'all .5s';
    });
  }
  private registerHeightChangeListener() {
    this.resizeObserver = new ResizeObserver(this.updateHeight.bind(this));
    this.resizeObserver.observe(this.content.nativeElement);
  }
  private updateHeight() {
    if (this.state === 'open') {
      const elementHeight = this.getHeaderHeight() + this.getContentHeight();
      this.setHeight(elementHeight);
    } else {
      this.setHeight(this.getHeaderHeight());
    }
  }
  private getHeaderHeight() {
    return this.header.nativeElement.clientHeight;
  }
  private getContentHeight() {
    return this.content.nativeElement.clientHeight;
  }
  private setHeight(height: number) {
    this.element.nativeElement.style.height = height + 'px';
  }
  private open() {
    this.state = 'open';
    this.updateHeight();
  }
  private close() {
    this.state = 'closed';
    this.updateHeight();
  }
}