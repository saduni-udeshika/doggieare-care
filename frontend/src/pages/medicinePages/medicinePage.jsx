import React, { useState } from "react";
import { createMedicine } from "../../services/medicineService.js";
import "./medicine.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
    setInputValues();
  };
  return (
    <>
      <div className="brand">Add Medicine</div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Medicine</Form.Label>
          <Form.Control
            type="text"
            placeholder="Medicine"
            name="medicineName"
            onChange={(e) => handleChange(e)}
          />
          <Form.Label>QTY</Form.Label>
          <Form.Control
            type="number"
            placeholder="QTY"
            name="quantity"
            onChange={(e) => handleChange(e)}
          />
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Expiry Date"
            name="expDate"
            onChange={(e) => handleChange(e)}
          />
          <Form.Label>Category</Form.Label>
          <Form.Select
            type="text"
            placeholder="Category"
            name="category"
            onChange={(e) => handleChange(e)}
          >
            <option>Tablet</option>
            <option>Vaccine</option>
          </Form.Select>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Description"
            name="description"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="url"
            name="imgUrl"
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={sendMedicineData}>
          Add Medicine
        </Button>
      </Form>
    </>
  );
};
