import React, { useState } from "react";
import {
createMedicine,
} from "../services/medicineService.js";

export const MedicinePage = () => {
  const [inputValues, setInputValues] = useState({
    medicineName: "",
    quantity: "",
    expDate: "",
    category: "",
    description: "",
    imgUrl: "",
  });
  const handleChange = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  };
  const sendMedicineData = async (event) => {
    event.preventDefault();
    await createMedicine(inputValues);
    setInputValues("");
  };
  return (
    <div className="form">
      <form className="container">
        <div>Add Medicine</div>
        <label>Medicine</label>
        <input type="text" placeholder="Medicine" name="medicineName" onChange={(e) => handleChange(e)} />
        <label>QTY</label>
        <input type="number" placeholder="QTY" name="quantity" onChange={(e) => handleChange(e)} />
        <label>Expiry Date</label>
        <input type="date" placeholder="Expiry Date" name="expDate" onChange={(e) => handleChange(e)} />
        <label>Category</label>
        <input type="text" placeholder="Category" name="category" onChange={(e) => handleChange(e)} />
        <label>Description</label>
        <input type="text" placeholder="Description" name="description" onChange={(e) => handleChange(e)} />
        <input type="text" placeholder="url" name="imgUrl" onChange={(e) => handleChange(e)} />
        <button type="submit" onClick={sendMedicineData}>Add Medicine</button>
      </form>
    </div>
  );
};
