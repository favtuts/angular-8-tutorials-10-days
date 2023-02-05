import { Component } from '@angular/core';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent {
  
  showColor: boolean = false;

  constructor() {}

  public changeColor(): void {
    this.showColor = !this.showColor;
  }
}