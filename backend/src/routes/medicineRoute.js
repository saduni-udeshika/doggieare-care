import express from 'express';
import {
  createMedicine, getMedicine,
} from '../controllers/medicineController.js';

const router = express.Router();

router.get('/',getMedicine);

router.post('/', createMedicine);

//router.delete('/', authMiddleWare, handleException(deleteNote));

//router.patch('/', authMiddleWare, handleException(updateNote));

export const medicineRouter = router;