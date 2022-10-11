const express = require('express');
const {createMedicine, deleteMedicine, getMedicine, updateMedicine} = require('../controllers/medicineController.js');

const router = express.Router();

router.get('/',getMedicine);

router.post('/', createMedicine);

router.delete('/:id',  deleteMedicine);

router.put('/:id', updateMedicine);

module.exports = router;