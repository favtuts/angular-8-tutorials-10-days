import { Component } from '@angular/core';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent {    
  data:number=100;      
    constructor() {    
        console.log(`new - data is ${this.data}`);    
    }          
    ngOnChanges() {    
        console.log(`ngOnChanges - data is ${this.data}`);    
    }      
    ngOnInit() {    
        console.log(`ngOnInit  - data is ${this.data}`);    
    }   
}