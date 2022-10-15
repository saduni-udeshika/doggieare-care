import React, { useState, useEffect } from "react";
import { Table, Button,Card } from "react-bootstrap";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt,FaLock } from "react-icons/fa";
import { Fragment } from "react";
import jsPDF from 'jspdf'

function ViewRescuedDogs(props) {
    const [rescuedDogs, setRescuedDogs] = useState([]);
    const [search, setSearch] = useState("");
    const [state, setState] = useState("adopted");
    const space2 = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>

    useEffect(() => {

        //get funtion
        function geRescuedDogs() {
            axios.get("http://localhost:8000/createRescuedDog/").then((res) => {
                setRescuedDogs(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        geRescuedDogs();
    }, [])

    const onDelete = (_id) =>{
        axios.delete(`http://localhost:8000/createRescuedDog/delete/${_id}`);
    }

   

    const createPDF = (_id,dogName,dogColour,weight,age,gender,perspectivePetParents,contactNo,adoptDate)=>{
        console.log(_id);
        console.log(dogName);
        console.log(dogColour);
        console.log(weight);
        console.log(age);
        console.log(gender);
        console.log(perspectivePetParents);
        console.log(contactNo);
        console.log(adoptDate);

        const unit = "pt";
        const size = "A4";
        const orientation = "landscape";
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
        const title = `**** DOGGIE CARE PUPPY'S REPORT CARD ****    (Dog ID- ${_id})`;
        const doggieName = `Puppy's Name: ${dogName}`;
        const doggieColour = `Colour: ${dogColour}`;
        const dogWeight = `Weight: ${weight}Kg`;
        const dogAge = `Age: ${age}`;
        const doggender = `Gender: ${gender}`;
        const owner = `New Owner: Mr/Ms.${perspectivePetParents}`;
        const ownerContactNo = `Contact Number: ${contactNo}`;
        const dogadoptDate = `Adopt Date: ${adoptDate}`;
   
      
        const image2 = "https://res.cloudinary.com/dorcq99nr/image/upload/v1665646657/DoggieCare/black_sgno4i.jpg"
        const success = `Thank you, Mr/Ms. ${perspectivePetParents} on taking home a puppy. We are committed to providing you with quality services.` 
      //  const second = `Description about clinic` ;
      //    const third  = `We are committed to providing you with quality services. Thank you`; 
      //  const issuedate =`Report Issue Date: ${adoptDate}`;
        const left = 20;
        const top = 8;
        
        const lefts = 450;
        const tops = 200;
        const imgWidths = 350;
        const imgHeights = 250;
        doc.setFontSize(15);
        doc.text(200,40 ,title);
        doc.text(60,200, doggieName );
        doc.text(60,240, doggieColour);
        doc.text(60, 280,dogWeight);
        doc.text(60, 320, dogAge);
        doc.text(60, 360, doggender);
        doc.text(60, 400,owner);
        doc.text(60, 440,ownerContactNo);
        doc.text(60, 480,dogadoptDate);
        
       
        doc.addImage(image2, 'PNG' , lefts, tops, imgWidths, imgHeights);
        
      //  doc.text(60,500,issuedate);
        doc.text(60, 100, success);
      //  doc.text(80, 120, second);
      //  doc.text(80, 140, third);
        doc.save(`${dogName}'s ReportCard.pdf`);
     
    }

  //update rescued dog details
  function handleShow(_id){}

  //Adopt Puppy
  function adoptPuppy(_id){}
    return (
        <div style={{
            backgroundColor: '#010020',
            width: '100% ',
            height: '1000px'
          }}>
            <div style={{ paddingLeft: "10vh", color: 'white',paddingTop:'4vh' }}>
        <p >Doggie Care   {space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}<FaLock /></p>
      </div>
            <div style={{ paddingLeft: '8vh', paddingRight: '13vh', paddingTop: '4vh', paddingBottom: '4vh' }}>
                <Card style={{
                    backgroundColor: '#062464',
                }}>
<div style={{ paddingBottom: "8vh", paddingTop: "5vh", paddingLeft: "8vh", paddingRight: "5vh" }}>
            <div style={{ paddingBottom: "5vh", paddingTop: "5vh", paddingLeft: "5vh", paddingRight: "5vh" }}>
                <h1 style={{color:'white'}}>View Puppies Details</h1>
                <div style={{ paddingleft: "10vh", paddingBottom: "1vh", paddingTop: "1vh" }} >

                <div style={{ paddingleft: "2vh", paddingBottom: "1vh", paddingTop: "1vh" }}>
                            <div style={{ paddingBottom: "1vh", paddingTop: "1vh" }}>
                                <input type="text" placeholder="Search from 'Name' " className="mr-2"
                                    onChange={(e) => {
                                        setSearch(e.target.value);
                                    }} />
                            </div>

                        </div>

                </div>
                <Table striped bordered hover size="sm" variant="light" >
                    <thead>
                        
                        <tr>

                            
                        <th>Registerd Date</th>
                            <th>Dog Name</th>
                            <th>Dog Colour</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Perspective Pet Parents</th>
                            <th>Contact No</th>
                            <th>Adopt Date</th>
                            <th>Status</th>
                            <th>Download Report Card</th>
                            <th>Edit</th>
                            <th>Adopt Puppy</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {rescuedDogs.filter(RescuedDogs => {
                            if (search === "") {
                                return RescuedDogs
                            }
                            else if (RescuedDogs.dogName.toLowerCase().includes(search.toLowerCase())) {
                                return RescuedDogs
                            }
                        }).
                            map((RescuedDogs) => {

                                return (
                                    <tr key={RescuedDogs._id}>
                                        <td>{RescuedDogs.registerdDate}</td>
                                        <td>{RescuedDogs.dogName}</td>
                                        <td>{RescuedDogs.dogColour}</td>
                                        <td>{RescuedDogs.age}</td>
                                        <td>{RescuedDogs.gender}</td>
                                        <td>{RescuedDogs.perspectivePetParents}</td>
                                        <td>{RescuedDogs.contactNo}</td>
                                        <td>{RescuedDogs.adoptDate}</td>
                                        <td><button style={{ color: state === "adopted" ? "#F00" : "#00F" }}>{RescuedDogs.status}</button></td>
                                        <td> <Button className="generateDogReportCardPdF" onClick={()=> createPDF(RescuedDogs._id,RescuedDogs.dogName,RescuedDogs.dogColour,RescuedDogs.weight,RescuedDogs.age,RescuedDogs.gender,RescuedDogs.perspectivePetParents, RescuedDogs.contactNo, RescuedDogs.adoptDate )}>Report Card</Button></td>
                                        <td>
                                       
                                         <Button variant="outline-success" onClick={() => handleShow(RescuedDogs._id)} ><FaPencilAlt/></Button>
                                        
                                        </td>
                                        <td>
                                       
                                       <Button variant="outline-primary"  ><a href="/adoption"> Adopt Puppy </a> </Button>
                                       
                                        </td>

                                        <td>
                                            <Button variant="outline-danger" onClick={() => onDelete(RescuedDogs._id)}><FaTrashAlt/></Button>

                                        </td>
                                    </tr>

                                );
                            })}

                    </tbody>

                </Table >

            </div>
        </div>



                </Card>

            </div>
        </div>


    );

}
export default ViewRescuedDogs;



