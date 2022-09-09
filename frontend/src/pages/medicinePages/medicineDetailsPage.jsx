import React, { useEffect, useState } from "react";
import { getMedicine } from "../../services/medicineService";
import { Fragment } from "react";
import { FaLock} from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Form from "react-bootstrap/Form";

export const MedicineDetailsPage = () => {
  const space2 = (
    <Fragment>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Fragment>
  );
  const [medicines, setMedicines] = useState([]);

  const getMedicines = async () => {
    const medicineResponse = await getMedicine();
    setMedicines(medicineResponse.data);
  };

  useEffect(() => {
    getMedicines();
  }, []);

  // search bar
  const handleChange = (event) => {
  };
  return (
    <div
    style={{
      backgroundColor: "#010020",
      width: "100% ",
      height: "1000px",
    }}
  >
    <div style={{ paddingLeft: "10vh", color: "white", paddingTop: "4vh" }}>
      <p>
        Doggie Care {space2}
        {space2}
        {space2}
        {space2}
        {space2}
        {space2}
        {space2}
        {space2}
        {space2}
        {space2}
        {space2}
        {space2}
        <FaLock />
      </p>
    </div>
    <div
      style={{
        backgroundColor: "#010020",
        width: "100% ",
        height: "1000px",
      }}
    >
      <div
        style={{
          backgroundColor: "#010020",
          width: "100% ",
          height: "1000px",
        }}
      >
      <div style={{ paddingLeft: "10vh" }}>
      <h6 style={{ color: "#A4DE02" }}>Medicines</h6>
    </div>
    <div style={{display: "flex", flexDirection:"raw" }}>
    <Form.Control
    type="text"
    placeholder="Search...."
    style={{
      backgroundColor: "#010020",
      color: "#F62681",
      width: "30%",
      marginLeft: "120px"
    }}
    name="medicineName"
    onChange={(e) => handleChange(e)}
  />
  <BsSearch style={{margin: "10px"}} />
    </div>
    <div style={{ paddingLeft: "10vh", paddingRight: "10vh"}}>
    {medicines.map((medicine) => (
      <div key={medicine._id} className="medicine-card">
        <div>
          <img src={medicine.imgUrl} alt="medicine" />
          <br />
          <br />
          <p style={{ color: "#A4DE02" }}>{medicine.medicineName}</p>
          <br />
          <p>{medicine.quantity}</p>
          <br />
          <p>{medicine.expDate}</p>
          <br />
          <p>{medicine.category}</p>
          <br />
          <p className="description">{medicine.description}</p>
        </div>
      </div>
    ))}
    </div>
      </div>
    </div>
    </div>
  );
};
