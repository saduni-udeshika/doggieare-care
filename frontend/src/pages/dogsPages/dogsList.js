import React, { useEffect, useState } from "react";
import { dogsLists } from "../../services/dogService";
import { Fragment } from "react";
import { FaLock } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import {MdEdit, MdDelete} from "react-icons/md";
import Button from "react-bootstrap/esm/Button";

export const DogsList = () => {
  const space2 = (
    <Fragment>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Fragment>
  );
  const [dogs, setDogs] = useState([]);

  const getDogs = async () => {
    const dogsList = await getDogs();
    setDogs(dogsList.data);
  };

  useEffect(() => {
    getDogs();
  }, []);

  // search bar
  const handleChange = (event) => {};
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
            <h6 style={{ color: "#A4DE02" }}>Dogs List</h6>
          </div>
          <div style={{ display: "flex", flexDirection: "raw" }}>
            <Form.Control
              type="text"
              placeholder="Search...."
              style={{
                backgroundColor: "#010020",
                color: "#F62681",
                width: "30%",
                marginLeft: "120px",
              }}
              name="dogName"
              onChange={(e) => handleChange(e)}
            />
            <BsSearch style={{ margin: "10px" }} />
            {space2}{space2}{space2}{space2}{space2}
          
          </div>
          <div style={{ paddingLeft: "10vh", paddingRight: "10vh" }}>
            {dogs.map((dog) => (
              <div key={dog._id} className="medicine-card">
                <div>
                  <img src={dog.imgUrl} alt="medicine" />
                  <br />
                  <MdDelete style={{color: "red", float: "right", margin: "4px" }}/>
                  <MdEdit style={{color: "green", float: "right", margin: "4px" }}/>
                  <br />
                  <p style={{ color: "#A4DE02" }}>{dog.dogName}</p>
                  <br />
                  <p>{dog.dogID}</p>
                  <br />
                  <p>{dog.ownerName}</p>
                  <br />
                  <p>{dog.breed}</p>
                  <br />
               
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
