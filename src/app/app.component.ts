import { Component } from '@angular/core';
import { TestService } from '../test.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';

  constructor( public _test: TestService){}
  toggle(){
    this._test.isLoggedIn = ! this._test.isLoggedIn;
  }
}
