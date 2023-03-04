import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hola soy  {{name}}!</h1>
    <h2>y desarrollo aplicaciones en   {{software}}!</h2>
    <p> {{comentario}}!</p>

    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Joseph';
  software = 'Angular';
  comentario = 'Estoy a la orden para cualquier proyecto con esta tecnologia';

}

bootstrapApplication(App);
