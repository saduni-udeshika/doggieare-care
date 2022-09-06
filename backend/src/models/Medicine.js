import mongoose from 'mongoose';

const MedicineSchema = new mongoose.Schema(
    {
    //   adminId: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
      name: String,
      quantity: String,
      expDate: Date,
      category: String,
      description: String,
      imgUrl: String,
    },
    { timestamps: true }
  );
  
  const MedicineModel = mongoose.model('Medicine', MedicineSchema);
  
  export default MedicineModel;