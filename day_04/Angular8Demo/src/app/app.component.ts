import { Component } from '@angular/core';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent {
  
  showInfo: boolean = false;
  caption: string = 'Show Text';

  constructor() {}

  public changeData(): void {
    this.showInfo = !this.showInfo;
    if (this.showInfo) {
      this.caption = 'Hide Text';
    }
    else {
      this.caption = 'Show Text';
    }
  }
}