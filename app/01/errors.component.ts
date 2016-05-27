
import {Component,Input} from 'angular2/core';

@Component({
    selector: 'errors',
    template: `
        <div>
           <span class="messages" *ngFor="#error of mapOfErrors()" >{{ error }}</span>
        </div>
    `,
    styles:[`
       
        .messages{
            display: block;
            color : red;
        }
    `],
    
  
})
export class ErrorsComponent {
 
    mapOfErrors() { 
    let output = [] ;  
      for(let key in this.errors) 
          if(this.errors[key]){
            this.errors[key] = this.messages[key];
            output.push(this.errors[key])
           } 
            return output;  
       }

    @Input('errors-input') errors;
    @Input('messages-input') messages;
} 
