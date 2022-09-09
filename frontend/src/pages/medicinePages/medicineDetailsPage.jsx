import React, { useEffect, useState } from 'react'
import { getMedicine } from '../../services/medicineService';

export const MedicineDetailsPage = () => {
    const [medicines, setMedicines] = useState([]);
    
const getMedicines = async () => {
    const medicineResponse = await getMedicine();
    setMedicines(medicineResponse.data);
};

  useEffect(() => {
    getMedicines();
  }, []);
  return (
    <div>
    medicineDetailsPage
    {medicines.map((medicine) => (
        <div key={medicine._id}>
          <div>
          {medicine.medicineName}
          <br />
          {medicine.quantity}
          <br />
          {medicine.expDate}
          <br />
          {medicine.category}
          <br />
          {medicine.description}
          <br />
          {medicine.imgUrl}
          </div>
        </div>
      ))}
    </div>
  )
}
