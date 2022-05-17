const express = require("express");
const router = express.Router();
const productModule = require("../module/product");

router.post('/create', productModule.createProduct);
router.get('/get', productModule.getProducts); //to get only one employee details
router.put('/update/:productId',productModule.updateProducts);
router.delete('/remove/:productId', productModule.deleteProducts);
// router.put('/update/:employeeId/find',employeeModule.findAndUpdateEmployees);


module.exports = router;