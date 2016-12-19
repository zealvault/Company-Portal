import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";
import {Router} from 'aurelia-router';
export class App{
	configureRouter(config,router)
	{
		 this.router=router;
		 config.map([
		 {route:["","home"],moduleId:"home",title:"HOME",nav:"true"},
		 {route:"employeelist",moduleId:"employeelist",title:"EMPLOYEE",nav:"true"},
		 {route:"employee-details/:id",moduleId:"details",title:"DETAILS"},
		 {route:"modify/:id",moduleId:"modify",title:"MODIFY"}
		 ]);
	}
}