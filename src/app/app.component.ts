import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

    const response3 = await fetch('http://localhost:5000/kosmas');
    this.kosmas.next(await response3.json());
  }
  public sayHello() {
    alert('hello');
  }
}
