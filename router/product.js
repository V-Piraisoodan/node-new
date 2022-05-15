const express = require("express");
const router = express.Router();
const productModule = require("../module/product");

router.post('/create', productModule.createProduct);
// router.get('/get/:employeeId', employeeModule.getEmployees); //to get only one employee details
// router.post('/create', employeeModule.createEmployees);
// router.put('/update/:employeeId',employeeModule.updateEmployees);
// router.put('/update/:employeeId/find',employeeModule.findAndUpdateEmployees);
// router.delete('/remove/:employeeId', employeeModule.deleteEmployees);

module.exports = router;