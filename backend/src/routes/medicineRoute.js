import express from 'express';
import {
  createMedicine,
} from '../controllers/medicineController.js';

const router = express.Router();

//router.get('/', authMiddleWare, handleException(getNotes));

router.post('/', createMedicine);

//router.delete('/', authMiddleWare, handleException(deleteNote));

//router.patch('/', authMiddleWare, handleException(updateNote));

export const medicineRouter = router;