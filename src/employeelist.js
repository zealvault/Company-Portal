import {inject} from "aurelia-framework";
import {Router} from 'aurelia-router';
//import {EmployeeData} from "./employeeData";
//@inject{EmployeeData};
import {HttpClient} from "aurelia-http-client";
export class EmployeeList
{
	constructor(){
		 this.http = new HttpClient();
	}

	activate() {
		return this.http.get("src/employee.json").then(response => {this.employees=response.content;});
		}

}
