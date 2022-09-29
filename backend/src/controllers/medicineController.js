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

  export const updateMedicine = async (req, res, _next) => {
      let id = req.params.id;
      const {medicineName, quantity, expDate, category, description, imgUrl} =req.body;
  
      const medicine = {
        medicineName,
        quantity,
        expDate,
        category,
        description,
        imgUrl,
      }  
      const update = await MedicineModel.findByIdAndUpdate(id,medicine)
      .then(() => {
      res.status(200).send({status: "Medicine update"})
   }).catch((err) => {
      console.log(err);
      res.status(500).send({status: "Error with updating data"});
   })
  };
  
  export const deleteMedicine = async (req, res, _next) => {
    let Id = req.params.id;

    await MedicineModel.findByIdAndDelete(Id)
    .then(() => {
        res.status(200).send({status: "Medicine delete"});
    }).catch(() => {
        res.send(err.message);
        res.status(500).send({status: "Error with delete medicine", error: err.message})
    })
  };
  