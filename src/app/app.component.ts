import { Component, Input } from '@angular/core';
import { FakeApiService } from './fake-api.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() card;
  name = 'Angular';
  isLoading = true
  constructor() {
   let i = setInterval(function () {

      clearInterval(i);

      // O código desejado é apenas isto:
      document.getElementById("loading").style.display = "none";

    }, 5000);
  }
}
