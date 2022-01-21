import { AfterViewInit, Component, OnInit } from '@angular/core';
// import { KeyObject, VerifyKeyObjectInput } from 'crypto';
import { BehaviorSubject } from 'rxjs';

const DEFAULT_OPTION = '--- Select ---';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  private readonly PANEL_OPEN_CLASS = 'open';
  public panels = ['active', 'active', 'active'];
  public list: any;
  public selected: any;
  public params = {
    concreteTypeList: DEFAULT_OPTION
  } as IParamters;
  public concreteTypeList = [DEFAULT_OPTION, 'C16/20', 'C20/25', 'C25/30', 'C30/37', 'C35/40', 'other'];
  public steelTypeList = [DEFAULT_OPTION, 'B500c', 'B500a', 'B500b', 'S220', 'S400', 'S500', 'S400s', 'S500s', 'other'];
  public sectionTypeList = [DEFAULT_OPTION, 'Rectangular', 'Circular'];
  public positionList = [DEFAULT_OPTION, 'Inner', 'Edge', 'Corner'];
  public axisList = [DEFAULT_OPTION, 'X', 'Y'];
  public elementTypeList = [DEFAULT_OPTION, 'Slab', 'Foot'];
  public diameterOfReinforcingBars_xAxisList = ['-- dbLx ---',
    'Ø8', 'Ø10', 'Ø12', 'Ø14', 'Ø16', 'Ø18', 'Ø20', 'other']
  public diameterOfReinforcingBars_yAxisList = ['-- dbLy --',
    'Ø8', 'Ø10', 'Ø12', 'Ø14', 'Ø16', 'Ø18', 'Ø20', 'other'];
  public reinforcementRatioTypeList = [DEFAULT_OPTION,
    'Count Reinforcement Ratio',
    'Set Reinforcement Ratio',
    'Minimum Reinforcement Ratio'];
  public dx = 2;
  public btnVal: string = '-';
  public data = new BehaviorSubject([] as any[]);
  public kosmasKatiAllo = new BehaviorSubject({} as { x: string; y: string });
  public kosmas = new BehaviorSubject(null as null | number);
  public async ngOnInit() {
    const response = await fetch('http://localhost:5000/weatherforecast');
    const data = await response.json();
    console.log(data);
    this.data.next(data);

    const response2 = await fetch('http://localhost:5000/kosmas/kati/allo');
    this.kosmasKatiAllo.next(await response2.json());
    console.log(this.kosmasKatiAllo);

    const response3 = await fetch('http://localhost:5000/kosmas');
    this.kosmas.next(await response3.json());
    console.log(this.kosmas);
  }
  /**
   * This function is like ngOnInit, but it runs AFTER the UI has been drawn
   * for the first time, so that we know how much height the .panel-content has.
   */
  public ngAfterViewInit() {
    document.querySelectorAll('.panel-v2').forEach(element => {
      const panel = element as HTMLElement;
      this.openPanel(panel);
      this.enablePanelTransitionNextTick(panel);
    });
  }
  public shrinkContent(i: number) {
    // Temporary fix because panel-v2 broke this implementation
    i = i - 1;
    // alert('hello');
    const panel = document.getElementsByClassName('panel') as HTMLCollectionOf<HTMLElement>;
    const btn = document.getElementsByClassName('accordion') as HTMLCollectionOf<HTMLElement>;

    if (this.panels[i] == 'active') {
      this.panels[i] = 'null';
      panel[i].style.transition = 'all 0.5s ease-out'
      panel[i].style.opacity = '0'
      panel[i].style.maxHeight = '0';
      panel[i].style.padding = '0px';
      panel[i].style.overflow = 'hidden';
      btn[i].classList.remove('active');
    }
    else {
      this.panels[i] = 'active';
      panel[i].style.maxHeight = 'none';
      panel[i].style.transition = 'all 0.5s ease-out'
      panel[i].style.opacity = '1'
      panel[i].style.padding = '0px 0px 20px 0px';
      panel[i].style.overflow = 'visible';

      btn[i].classList.toggle('active');
    }
  }
  public togglePanel(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const panel = target.nextSibling as HTMLElement;

    if (panel.classList.contains(this.PANEL_OPEN_CLASS)) {
      this.closePanel(panel);
    } else {
      this.openPanel(panel);
    }
  }
  private openPanel(panel: HTMLElement) {
    const content = panel.querySelector('.panel-content') as HTMLElement;
    panel.classList.add(this.PANEL_OPEN_CLASS);
    panel.style.height = content.clientHeight + 'px';
  }
  private closePanel(panel: HTMLElement) {
    panel.classList.remove(this.PANEL_OPEN_CLASS);
    panel.style.height = '';
  }
  /**
   * We only want transition to be enabled AFTER the panel is first drawn,
   * otherwise the user would see a transition during page load. To
   * "schedule" a command to run as soon as possible but not right now, 
   * we use `setTimeout`.
   */
  private enablePanelTransitionNextTick(panel: HTMLElement) {
    setTimeout(() => {
      panel.style.transition = 'all 0.5s';
    });
  }
};

interface IParamters {
  concreteTypeList: string;
  steelTypeList: string;
  sectionType: string;
  position: string;
  axis: string;
  elementType: string;
  diameterOfReinforcingBars_xAxisList: string;
  diameterOfReinforcingBars_yAxisList: string;
}
