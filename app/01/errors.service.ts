export class ErrorsService{
    
    getErrors()  {
        return {
               invalid:  true, 
               required: true,
               format : true       
             }    
             
        
    }

    getMessages() {
        return {
               invalid:  "Please provide a valid value", 
               required: "Please provide a value",
               format:   "Field is not formatted properly!"
            } 
        
   }
}