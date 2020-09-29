import { Component } from '@angular/core';

export class Weather {
  city: string
  conditions: string
  temperature: number
  icon: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'weather-app';
}
