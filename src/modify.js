import {HttpClient} from "aurelia-http-client";
import {EmployeeData} from "./employeeData";
import {Router} from 'aurelia-router';
export class Details{
	/*constructor(employeeData){
		 this.data=employeeData;
	}
	activate(params.id) {
		
		//return this.data.getId(params.id).then(employee=>this.employee=employee);
		return this.data.getById(params.id);
	}*/
	constructor(){
		 this.http = new HttpClient();
	}

	activate(params) {
		return this.http.get('${"src/employee.json"}/${params.id}').then(response => {this.employee=response.content;});
		}

}
