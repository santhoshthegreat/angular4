import { Component }          from '@angular/core';

import { Hero }        from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <button (click)="getJSON()">GET json</button>
      <div>Output JSON</div>
      <div>{{result | json}}</div>
      <div>{{result?.ip}}</div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Tour of Heroes';
  result:JSON;
  resultip:String;
  constructor(
    private heroService: HeroService
  ){}
  getJSON(): void {
    this.heroService.getJSON().then(heroes => this.result=heroes);
  }
}