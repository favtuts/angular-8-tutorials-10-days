import { Component } from '@angular/core';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent {  
    
  productList: Array<string> = ['IPhone','Galaxy 9.0','Blackberry 10Z'];  
  
  constructor() { }  
} 