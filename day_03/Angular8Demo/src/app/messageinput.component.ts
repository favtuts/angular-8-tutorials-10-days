import { Component, Input } from '@angular/core';  
  
@Component({  
  selector: 'message-input',  
  templateUrl: './messageinput.component.html',  
  styleUrls : ['./custom.css']  
})  
export class MessageInputComponent {  
  
    @Input() public message :string = '';  
  
    @Input('alert-pop') public message1 :string= ''  
    
    public showAlert():void{  
        alert(this.message1);  
    }  
}