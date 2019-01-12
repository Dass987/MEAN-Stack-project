const express = require('express');
const router = express.Router();
const employeeCtrl = require('../controllers/employee.controller');

router.get('/', employeeCtrl.getEmployees);
router.get('/:id', employeeCtrl.getEmployee);
router.post('/', employeeCtrl.createEmployee);
router.put('/:id', employeeCtrl.updateEmployee);
router.delete('/:id', employeeCtrl.deleteEmployee);

module.exports = router;