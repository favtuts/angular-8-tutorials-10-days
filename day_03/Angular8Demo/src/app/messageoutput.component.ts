import { Component, Input, EventEmitter, Output } from '@angular/core';  
  
@Component({  
  selector: 'message-output',  
  templateUrl: './messageoutput.component.html',  
  styleUrls : ['./custom.css']  
})  
export class MessageOutputComponent {  
  
    @Input() public message :string = '';  
    @Input('alert-pop') public message1 :string= ''  
  
    @Output() onSignup  = new EventEmitter<any>();  
  
    public data:any={};  
    
    public showAlert():void{  
        alert(this.message1);  
    }  
  
    public onSubmit() :void{  
      this.onSignup.emit(this.data);  
    }  
}  