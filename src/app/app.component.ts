import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
// import { KeyObject, VerifyKeyObjectInput } from 'crypto';
import { BehaviorSubject, ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public panels: string[] = ['active', 'active', 'active'];
  public list: any;
  public selected: any;
  public params = {} as IParamters;
  public concreteTypeList: string[] = ['--- Select ---', 'C16/20', 'C20/25', 'C25/30', 'C30/37', 'C35/40', 'other'];
  public steelTypeList: string[] = ['--- Select ---', 'B500c', 'B500a', 'B500b', 'S220', 'S400', 'S500', 'S400s', 'S500s', 'other'];
  public sectionTypeList: string[] = ['--- Select ---', 'Rectangular', 'Circular'];
  public positionList: string[] = ['--- Select ---', 'Inner', 'Edge', 'Corner'];
  public axisList: string[] = ['--- Select ---', 'X', 'Y'];
  public elementTypeList: string[] = ['--- Select ---', 'Slab', 'Foot'];
  public diameterOfReinforcingBars_xAxisList: string[] = ['-- dbLx ---',
    'Ø8', 'Ø10', 'Ø12', 'Ø14', 'Ø16', 'Ø18', 'Ø20', 'other']
  public diameterOfReinforcingBars_yAxisList: string[] = ['-- dbLy --',
    'Ø8', 'Ø10', 'Ø12', 'Ø14', 'Ø16', 'Ø18', 'Ø20', 'other'];
  public reinforcementRatioTypeList: string[] = ['--- Select ---',
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
  public shrinkContent(i: number) {
    // alert('hello');
    let panel = document.getElementsByClassName('panel') as HTMLCollectionOf<HTMLElement>;
    let btn = document.getElementsByClassName('accordion') as HTMLCollectionOf<HTMLElement>;

    if (this.panels[i] == 'active') {
      this.panels[i] = 'null';
      panel[i].style.transition = "all 0.5s ease-out"
      panel[i].style.opacity = "0"
      panel[i].style.maxHeight = "0";
      panel[i].style.padding = "0px";
      panel[i].style.overflow = "hidden";
      btn[i].classList.remove("active");
    }
    else {
      this.panels[i] = 'active';
      panel[i].style.maxHeight = "none";
      panel[i].style.transition = "all 0.5s ease-out"
      panel[i].style.opacity = "1"
      panel[i].style.padding = "0px 0px 20px 0px";
      panel[i].style.overflow = "visible";

      btn[i].classList.toggle("active");
    }

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
