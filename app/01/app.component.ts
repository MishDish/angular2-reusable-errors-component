import {Component} from 'angular2/core';
import {ErrorsComponent}  from './errors.component';
import {ErrorsService} from './errors.service';


@Component({
    selector: 'my-app',
    template: '<h1>App02</h1><errors [messages-input]="messages" [errors-input]="errors"></errors>',
    directives:[ErrorsComponent],
    providers:[ErrorsService]
})
export class AppComponent { 
    
     messages;
     errors ; 
    constructor(errors : ErrorsService) {
      this.errors = errors.getErrors();
      this.messages = errors.getMessages();
 
    }
 
}