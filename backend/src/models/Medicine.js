import mongoose from 'mongoose';

const MedicineSchema = new mongoose.Schema(
    {
      medicineName: String,
      quantity: Number,
      expDate: Date,
      category: String,
      description: String,
      imgUrl: String,
    },
    { timestamps: true }
  );
  
  const MedicineModel = mongoose.model('Medicine', MedicineSchema);
  
  export default MedicineModel;