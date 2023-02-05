import { Component, OnInit, Output, EventEmitter } from '@angular/core';  
  
@Component({  
    selector: 'child',  
    templateUrl: 'child.component.html'  
})  
  
export class ChildComponent implements OnInit {  
    private firstNumber: number = 0;  
    private secondNumber: number = 0;  
    private result: number = 0;  
  
    @Output() private addNumber: EventEmitter<number> = new EventEmitter<number>();  
    @Output() private subtractNumber: EventEmitter<number> = new EventEmitter<number>();  
    @Output() private multiplyNumber: EventEmitter<number> = new EventEmitter<number>();  
    @Output() private divideNumber: EventEmitter<number> = new EventEmitter<number>();  
  
    constructor() { }  
  
    ngOnInit(): void {  
    }  
  
    private add(): void {  
        this.result = this.firstNumber + this.secondNumber;  
        this.addNumber.emit(this.result);  
    }  
  
    private subtract(): void {  
        this.result = this.firstNumber - this.secondNumber;  
        this.subtractNumber.emit(this.result);  
    }  
  
    private multiply(): void {  
        this.result = this.firstNumber * this.secondNumber;  
        this.multiplyNumber.emit(this.result);  
    }  
  
    private divide(): void {  
        this.result = this.firstNumber / this.secondNumber;  
        this.divideNumber.emit(this.result);  
    }  
  
    public clear(): void {  
        this.firstNumber = 0;  
        this.secondNumber = 0;  
        this.result = 0;  
    }  
}  