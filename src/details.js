import {HttpClient} from "aurelia-http-client";
import {EmployeeData} from "./employeeData";
import {Router} from 'aurelia-router';
export class Details{
	constructor(){
		 this.http = new HttpClient();
	}

	activate(params) {
		return this.http.get('${"src/employee.json"}/${params.id}').then(response => {this.employee=response.content;});
		}
}
