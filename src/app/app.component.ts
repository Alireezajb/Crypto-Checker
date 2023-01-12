import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crypto-Checker';
  SelectedCurrency: string = "IRR";

  sendCurrency(event: string) {
    console.log(event);

  }
}
