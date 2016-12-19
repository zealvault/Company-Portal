import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";
export class EmployeeData{
	constructor(httpClient){
		 this.http = httpClient();
	}
	getAll() {
		
		return this.http.get("src/employee.json").then(response => response.content);
	}
	getById(id)
	{
		return this.http.get('${"src/employee.json"}/${id}').then(response => response.content);
	}
}