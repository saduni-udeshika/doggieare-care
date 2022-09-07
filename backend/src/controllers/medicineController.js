import MedicineModel from '../models/Medicine.js';
import { validateMedicine } from '../validators/medicineValidator.js';

export const createMedicine = async (req, res, _next) => {
    const { error, value } = validateMedicine({
      name: req.body.name,
      quantity: req.body.quantity,
      expDate: new Date(req.body.expDate),
      category: req.body.category,
      description: req.body.description,
      imgUrl: req.body.imgUrl,
    });
    if (error) {
      res.status(400).send(error.message);
      return;
    }
    const medicine = new MedicineModel({
      ...value,
    });
    await medicine.save();
    res.status(200).json(medicine.toJSON());
  };

  export const getMedicine = async (req, res, _next) => {
    const medicines = await MedicineModel.find();
    res.status(200).json(
      medicines.map((n) => {
        const medicine = n.toJSON();
        return medicine;
      })
    );
  };
  