import { Component } from '@angular/core'; /* Need to import Component package from
angular since ts file doesn't understand wat @Component means*/
/* Component are used to create web pages or html pages for my application */
@Component({
    selector: 'app-server', /* selector is defined to use this component in the html file*/
    templateUrl: './server.component.html' /* This component corresponds to the mentioned
                                                html file*/
})
export class ServerComponent{ /* exporting the class so that it can be used outside.
    instance of the class is created and handled by the framework */
server_Id:number = 120;
serverButton:boolean = false;
constructor(){
    setTimeout(()=>{this.serverButton=true;},2000);
}

}
