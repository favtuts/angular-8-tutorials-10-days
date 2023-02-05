import { Component } from '@angular/core';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent {  
    
  public message: string = 'Sample Demostration of Attribute Directives using Custom Directives';  
  public color: string = 'blue';  
  
} 