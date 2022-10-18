import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {  Row, Col } from 'react-bootstrap';
import { Fragment } from "react";
import { FaLock } from "react-icons/fa";
import { viewOneDog, updateDoggy} from "../../services/dogService";

export const UpdateDog = () => {
  const space2 = (
    <Fragment>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </Fragment>
  );
  //retrieve relevent data form relavent fields
  const { id } = useParams();
  const navigate = useNavigate();

//   const [dogID, setdogID] = useState("");
  const [dogName, setdogName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [breed, setBreed] = useState("");
  const [sex, setSex] = useState("");
//   const [image, setImage] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [disease, setDisease] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [nextDate, setNextDate] = useState("");
  const [medicine, setMedicine] = useState("");
  const [labTests, setLabTests] = useState("");
  const [doctor, setDoctor] = useState("");
  
  const dogsList = async () => {
    const dogResponse = await viewOneDog(id);
    console.log(dogResponse.data)
    // setdogID(dogResponse.data.dog.dogID)
    setdogName(dogResponse.data.dog.dogName)
    setOwnerName(dogResponse.data.dog.ownerName)
    setAddress(dogResponse.data.dog.address)
    setDob(dogResponse.data.dog.dob)
    setBreed(dogResponse.data.dog.breed)
    setSex(dogResponse.data.dog.sex)
    setWeight(dogResponse.data.dog.weight)
    setBloodGroup(dogResponse.data.dog.bloodGroup)
    setDisease(dogResponse.data.dog.disease)
    setLastDate(dogResponse.data.dog.lastDate)
    setNextDate(dogResponse.data.dog.nextDate)
    setMedicine(dogResponse.data.dog.medicine)
    setLabTests(dogResponse.data.dog.labTests)
    setDoctor(dogResponse.data.dog.doctor)


  };
  
  useEffect(() => {
    dogsList();
  }, []);

    //update data
    const updateDogDetails = async (e) => {
      e.preventDefault();
      const dog = {
        dogName,ownerName,address,dob,breed,sex,weight,bloodGroup,disease,lastDate,nextDate,medicine,labTests,doctor
        
      };
      await updateDoggy(id, dog)
      navigate("/dogs")
    }

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
    <div style={{ paddingLeft: "10vh" }}>
      <h6 style={{ color: "#A4DE02" }}>Update General Information</h6>
    </div>
    <div style={{ paddingLeft: "10vh", paddingRight: "10vh" }}>
      <Form>
      <Row>
                    <Col>
                      <br />
                      <div style={{ paddingLeft: '10vh' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Dog ID:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Dog Id"
            style={{
              backgroundColor: "#010020",
              color: "#F62681",
            }}
            name="dogID"
            value={dogID}
            onChange={(e) => {setdogID(e.target.value)}}disabled
          /> */}
          <Form.Label>Dog Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Dog Name"
            style={{
              backgroundColor: "#010020",
              color: "#F62681",
            }}
            name="dogName"
            value={dogName}
            onChange={(e) => {setdogName(e.target.value)}}
          />
          <Form.Label>Owner Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Owner Name"
            style={{
              backgroundColor: "#010020",
              color: "#F62681",
            }}
            name="ownerName"
            value={ownerName}
            onChange={(e) => {setOwnerName(e.target.value)}}
          />
           <Form.Label>Address:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Owner Address"
            style={{
              backgroundColor: "#010020",
              color: "#F62681",
            }}
            name="address"
            value={address}
            onChange={(e) => {setAddress(e.target.value)}}
          />
          {/* <Form.Label>Address:</Form.Label>
          <Form.Select
            type="text"
            placeholder="Address"
            style={{
              backgroundColor: "#010020",
              color: "#F62681",
            }}
            name="category"
            value={address}
            onChange={(e) => {setAddress(e.target.value)}}
          >
            <option>Tablet</option>
            <option>Vaccine</option>
          </Form.Select> */}
          

        </Form.Group>
        </div>

<br />
</Col>

<Col>
                      <br />
                      <div>
                      <Form.Label>Date of Birth:</Form.Label>
                      <Form.Control
            type="date"
            placeholder="Date of Birth"
            style={{
              backgroundColor: "#010020",
              color: "#F62681",
            }}
            name="dob"
            value={dob}
            onChange={(e) => {setDob(e.target.value)}}
          />
           <Form.Label>Gender:</Form.Label>
          <Form.Select
            type="text"
            placeholder="Gender"
            style={{
              backgroundColor: "#010020",
              color: "#F62681",
            }}
            name="sex"
            value={sex}
            onChange={(e) => {setSex(e.target.value)}}
          >
            <option>Male</option>
            <option>Female</option>
          </Form.Select> 
          
                                        </div>

<br />
</Col>
                        

</Row>
<br/>
<div style={{ paddingLeft: "10vh" }}>
      <h6 style={{ color: "#A4DE02" }}>Update Health Information</h6>
    </div>
    
        <div style={{ paddingLeft: "50%" }}>
          <Button
            type="submit"
            onClick={updateDogDetails}
            style={{ backgroundColor: "green" }}
          >
            UPDATE
          </Button>
        </div>
      </Form>
    </div>
  </div>
  )
  }

