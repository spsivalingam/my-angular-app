import { Component } from '@angular/core';

@Component({
  selector: 'app-root', /* exposing the componenet as a tag -> <app-root></app-root>*/
  /*selector : '[app-root]' exposing the component as a attribute -> <div app-root></div>*/
  /*selector : '.app-root' exposing the component as a class -> <div class='app-root'></div>*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
