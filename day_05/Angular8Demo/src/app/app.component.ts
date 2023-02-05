import { Component,ViewChild } from '@angular/core';  
import { ChildComponent } from './child.component';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent {  
  private result: string = '';  
  
    @ViewChild(ChildComponent, { static:true}) private _calculator: ChildComponent;  
  
    constructor() {  
    }  
  
    private add(value: number): void {  
        this.result = 'Result of Addition ' + value;  
    }  
  
    private subtract(value: number): void {  
        this.result = 'Result of Subtraction ' + value;  
    }  
  
    private multiply(value: number): void {  
        this.result = 'Result of Multiply ' + value;  
    }  
  
    private divide(value: number): void {  
        this.result = 'Result of Division ' + value;  
    }  
  
    private reset(): void {  
        this.result = '';  
        this._calculator.clear();  
    }  
}  