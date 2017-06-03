import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
  title: string;
}
export class Heroiene {
  id: number;
  name: string;
  title: string;
}
@Component({
  selector: 'my-app',
  template: `
    <h1>{{hero.title}}</h1>
    <h2>{{hero.name}}</h2>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    <h1>{{heroiene.title}}</h1>
    <h2>{{heroiene.name}}</h2>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="heroiene.name" placeholder="name">
    </div>

    `
})
export class AppComponent {
  hero = {
    id: 1,
    name: 'Naga chaitanya',
    title: 'Tour of Heroes'

  };
  heroiene = {
    id: 2,
    name: 'Samantha',
    title: 'Tour of Heroiene'
  };
}
