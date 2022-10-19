import React, { useState, useEffect } from "react";
import { Table, Button,Card } from "react-bootstrap";
import axios from "axios";
import { FaFilePdf,FaLock } from "react-icons/fa";
import { Fragment } from "react";
import jsPDF from 'jspdf'

function GeneratePrescriptions(props) {
    const [prescriptions, setPrescriptions] = useState([]);
    const [search, setSearch] = useState("");
    // const [state, setState] = useState("adopted");
    const space2 = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>

    useEffect(() => {

        //get funtion
        function getPrescriptions() {
            axios.get("http://localhost:8000/dog/").then((res) => {
                setPrescriptions(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getPrescriptions();
    }, [])

   

    const createPDF = (_id,dogID,dogName,sex,dob,weight,bloodGroup,disease,lastDate,nextDate,medicine,labTests,doctor)=>{
        console.log(_id);
        console.log(dogID);
        console.log(dogName);
        console.log(sex);
        console.log(dob);
        console.log(weight);
        console.log(bloodGroup);
        console.log(disease);
        console.log(lastDate);
        console.log(nextDate);
        console.log(medicine);
        console.log(labTests);
        console.log(doctor);



        const unit = "pt";
        const size = "A4";
        const orientation = "portrait";
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
        const title = `**** DOGGIE CARE HEALTH REPORT ****    (Dog ID- ${dogID})`;
        const name = `Dog's Name: ${dogName}`;
        const gender = `Gender: ${sex}`;
        const birth = `Date Of Birth: ${dob}`;
        const kg = `Weight: ${weight} kg`;
        const group = `Blood Group: ${bloodGroup}`;
        const diseas = `Disease :${disease}`;
        const last = `Last Visited Date: ${lastDate}`;
        const next = `Next Appointment Date: ${nextDate}`;
        const med = `Given Medicines: ${medicine}`;
        const tests = `Lab Tests Done: ${labTests}`;
        const vet = `Veteinary Surgeon: ${doctor}`;

      
        const image2 = "https://res.cloudinary.com/dorcq99nr/image/upload/v1665646657/DoggieCare/black_sgno4i.jpg"
        const success = `Doggy Care Veterinary Services` 
      //  const second = `Description about clinic` ;
      //    const third  = `We are committed to providing you with quality services. Thank you`; 
      //  const issuedate =`Report Issue Date: ${adoptDate}`;
        const left = 20;
        const top = 8;
        
        const lefts = 450;
        const tops = 200;
        const imgWidths = 350;
        const imgHeights = 300;
        doc.setFontSize(15);
        doc.text(200,40 ,title);
        doc.text(60,200, name );
        doc.text(60,240, gender);
        doc.text(60, 280,birth);
        doc.text(60, 320, kg);
        doc.text(60, 360, group);
        doc.text(60, 400,diseas);
        doc.text(60, 440,last);
        doc.text(60, 440,next);
        doc.text(60, 480,med);
        doc.text(60, 480,tests);
        doc.text(60, 480,vet);

       
        doc.addImage(image2, 'PNG' , lefts, tops, imgWidths, imgHeights);
        
      //  doc.text(60,500,issuedate);
        doc.text(60, 100,success);
      //  doc.text(80, 120, second);
      //  doc.text(80, 140, third);
        doc.save(`${dogID}'s Prescription.pdf`);
     
    }


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
                <h1 style={{color:'white'}}>Get Prescriptions</h1>
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

                            
                        <th>Dog ID</th>
                            <th>Dog Name</th>
                            <th>Gender</th>
                            <th>Date of Birth</th>
                            <th>Weight</th>
                            <th>Blood Group</th>
                            <th>Disease</th>
                            <th>Last Visited Date</th>
                            <th>Next Date</th>
                            <th>Medicines</th>
                            <th>Lab Tests</th>
                            <th>Veterinary Suregon</th>

                            <th>Prescriptions</th>
                           
                        </tr>
                    </thead>
                    <tbody>

                        {prescriptions.filter(Prescriptions => {
                            if (search === "") {
                                return Prescriptions
                            }
                            else if (Prescriptions.dogID.toLowerCase().includes(search.toLowerCase())) {
                                return Prescriptions
                            }
                        }).
                            map((Prescriptions) => {

                                return (
                                    <tr key={Prescriptions._id}>
                                        <td>{Prescriptions.dogID}</td>
                                        <td>{Prescriptions.dogName}</td>
                                        <td>{Prescriptions.sex}</td>
                                        <td>{Prescriptions.dob}</td>
                                        <td>{Prescriptions.weight}</td>
                                        <td>{Prescriptions.bloodGroup}</td>
                                        <td>{Prescriptions.disease}</td>
                                        <td>{Prescriptions.lastDate}</td>
                                        <td>{Prescriptions.nextDate}</td>
                                        <td>{Prescriptions.medicine}</td>
                                        <td>{Prescriptions.labTests}</td>
                                        <td>{Prescriptions.doctor}</td>

                                        <td> <Button className="generateDogReportCardPdF" onClick={()=> createPDF(Prescriptions._id,Prescriptions.dogID,Prescriptions.dogName,Prescriptions.sex,Prescriptions.dob,Prescriptions.weight,Prescriptions.bloodGroup,Prescriptions.disease, Prescriptions.lastDate, Prescriptions.nextDate, Prescriptions.medicine, Prescriptions.labTests, Prescriptions.doctor )}><FaFilePdf/></Button></td>
                                        <td>
                                       
                               
                                        
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
export default GeneratePrescriptions;



