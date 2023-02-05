import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProperCasePipe } from './propercase.pipe';
import { ChildComponent } from './child.component';


@NgModule({
  declarations: [
    AppComponent, ProperCasePipe, ChildComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
