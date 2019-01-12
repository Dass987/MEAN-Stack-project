import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
	styleUrls: ['./employees.component.css'],
	providers: [EmployeeService]
})

export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
		this.getEmployees();
	}
	
	addEmployee(form: NgForm) {
		
		if (form.value._id) {
			this.employeeService.putEmployee(form.value)
				.subscribe(response => {
					this.resetForm(form);
					M.toast({html: 'Successfully Updated!'});
					this.getEmployees();
				});
		} else {
			this.employeeService.postEmployee(form.value)
				.subscribe(response => {
					this.resetForm(form);
					M.toast({html: 'Successfully Saved!'});
					this.getEmployees();
				});
		}

	}

	editEmployee(employee: Employee) {

		this.employeeService.selectedEmployee = employee;
		M.updateTextFields();
		//this.employeeService.putEmployee();
	}

	deleteEmployee(_id: string) {
		this.employeeService.deleteEmployee(_id)
			.subscribe(response => {

				this.getEmployees();
				M.toast({html: 'Employee Deleted!'});

			});
	}

	getEmployees() {
		this.employeeService.getEmployees()
			.subscribe(response => {
				this.employeeService.employees = response as Employee[];
			});
	}

	resetForm(form?: NgForm) {
		if (form) {
			form.reset();
			this.employeeService.selectedEmployee = new Employee();
		}
	}

}
