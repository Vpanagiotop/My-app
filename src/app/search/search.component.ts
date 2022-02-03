import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const DEFAULT_OPTION = '--- Select ---';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
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

    // const response3 = await fetch('http://localhost:5000/messages/4/50');
    // this.kosmas.next(await response3.json());
    // console.log(this.kosmas);

  }
  public async onChange() {
    const response4 = await this.fetch('/vasilis', {
      oti: 'thelw',
      x: this.params.concreteTypeList,
      y: 6
    });

    console.log(response4);
  }
  private async fetch(path: string, data: any) {
    const response = await fetch(`http://localhost:5000${path}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    return await response.json();
  }
}

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

