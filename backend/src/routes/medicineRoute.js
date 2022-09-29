import express from 'express';
import {
  createMedicine, deleteMedicine, getMedicine, updateMedicine,
} from '../controllers/medicineController.js';

const router = express.Router();

router.get('/',getMedicine);

router.post('/', createMedicine);

router.delete('/:id',  deleteMedicine);

router.put('/:id', updateMedicine);

export const medicineRouter = router;