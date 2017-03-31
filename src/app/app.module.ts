import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import * as d3 from "d3";

import { AppComponent } from './app.component';
import { TrackScrollDirective } from './components/app/track-scroll/track-scroll';

@NgModule({
  declarations: [
    AppComponent,
    TrackScrollDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
