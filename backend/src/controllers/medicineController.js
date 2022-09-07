import MedicineModel from '../models/Medicine.js';
import { validateMedicine } from '../validators/medicineValidator.js';
export const createMedicine = async (req, res, _next) => {
    const { error, value } = validateMedicine({
      name: req.body.name,
      quantity: req.body.quantity,
      expDate: req.body.expDate,
      category: req.body.category,
      description: req.body.description,
      imgUrl: req.body.imgUrl,
    });
    if (error) {
      res.status(400).send(error.message);
      return;
    }
    const medicine = new MedicineModel({
      userId: req.body._user._id,
      ...value,
    });
    await medicine.save();
    res.status(200).json(medicine.toJSON());
  };