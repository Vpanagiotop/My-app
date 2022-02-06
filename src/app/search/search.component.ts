import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public list: any;
  public selected: any;
  public params = {
  } as IParamters;
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

  }
  public async onChange() {
    const response4 = await this.fetch('/vasilis', {
      oti: 'thelw',
      x: this.params.concrete,
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
  concrete: string;
  steel: string;
  diameterOfReinforcingBars: string;
}