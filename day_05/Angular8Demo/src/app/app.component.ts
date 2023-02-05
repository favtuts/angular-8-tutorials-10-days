import { Component, OnInit } from '@angular/core';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent implements OnInit {  
  public message: string;  
  
  constructor() { }  
  
  ngOnInit(): void {  
    this.message = "This is a Custom Pipe";  
  }  
}  