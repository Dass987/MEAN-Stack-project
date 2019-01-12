const Employee = require('../models/employee');

const employeeCtrl = {

	getEmployee: async (request, response) => {
		const employee = await Employee.findById(request.params.id);
		response.json(employee);
	},
	getEmployees: async  (request, response) => {
		const employees = await Employee.find();
		response.json(employees);
	},
	createEmployee: async  (request, response) => {
		const employee = new Employee({
			name: request.body.name,
			position: request.body.position,
			office: request.body.office,
			salary: request.body.salary
		});
		await employee.save();
		response.json({'status': 'Employee Saved'});
	},
	updateEmployee: async  (request, response) => {
		const employee = {
			name: request.body.name,
			position: request.body.position,
			office: request.body.office,
			salary: request.body.salary
		}
		await Employee.findByIdAndUpdate(request.params.id, {$set: employee}, {new: true});
		response.json({'status': 'Employee Updated'});
	},
	deleteEmployee: async  (request, response) => {
		await Employee.findByIdAndDelete(request.params.id);
		response.json({'status': 'Employee Deleted'});
	},

};

module.exports = employeeCtrl;