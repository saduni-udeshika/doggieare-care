import MedicineModel from '../models/Medicine.js';
import { validateMedicine } from '../validators/medicineValidator.js';

export const createMedicine = async (req, res, _next) => {
    const { error, value } = validateMedicine({
      medicineName: req.body.medicineName,
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

  // export const updateMedicine = async (req, res, _next) => {
  //   const { error, value } = validateMedicine({
  //     name: req.body.name,
  //     quantity: req.body.quantity,
  //     expDate: new Date(req.body.expDate),
  //     category: req.body.category,
  //     description: req.body.description,
  //     imgUrl: req.body.imgUrl,
  //   });
  //   if (error) {
  //     res.status(400).send(error.message);
  //     return;
  //   }
  //   const medicine = await MedicineModel.findById(req.query.id).exec();
  //   if (medicine.toJSON().userId.toString() !== req.body._user._id.toString()) {
  //     res.status(403).send(error.message);
  //     return;
  //   }
  //   await MedicineModel.findByIdAndUpdate(req.query.id, {
  //     $set: {
  //       title: value.title,
  //       description: value.description,
  //     },
  //   }).exec();
  //   res.status(200).send();
  // };
  
  // export const deleteMedicine = async (req, res, _next) => {
  //   if (!req.query.id) {
  //     res.status(400).send(error.message);
  //   }
  //   const medicine = await MedicineModel.findById(req.query.id).exec();
  //   if (medicine.toJSON().userId.toString() !== req.body._user._id.toString()) {
  //     res.status(403).send(error.message);
  //     return;
  //   }
  //   await MedicineModel.findByIdAndDelete(req.query.id);
  //   res.status(200).send();
  // };
  