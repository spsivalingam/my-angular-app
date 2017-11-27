import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Module is used to budle different pieces or components into a package*/

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [/* List of components my app need to know or scan*/
    AppComponent,
    ServerComponent,
    ServersComponent,
/* to generate a component we can give command like >ng g c <componentName> */
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
