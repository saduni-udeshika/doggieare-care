import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import axios from "axios";
import { Fragment } from "react";
import { FaLock } from "react-icons/fa";

function EditAppointment() {
    const [appointment, setappointment] = useState([]);
    const [search, setSearch] = useState("");
    const space2 = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
    
    const [_id, set_id] = useState(" ");
    const [name, setName] = useState(" ");
    const [contact, setContact] = useState(" ");
    const [nic, setNIC] = useState(" ");
    const [dogid, setdogid] = useState(" ");
    const [fee, setfee] = useState(" ");
    const [date, setdate] = useState(" ");
    const [time, settime] = useState(" ");
    const [reason, setreason] = useState(" ");
    const [timeval, onChange] = useState('10:00');
    
    useEffect(() => {

       
        //get funtion
        function getappointment() {
            axios.get("http://localhost:8000/appointment/"+_id).then((res) => {
                setappointment(res.data);
                set_id(res._id);
                setName(res.name);
                setContact(res.contact);
                setNIC(res.nic);
                setdogid(res.dogid);
                setfee(res.fee);
                setdate(res.date);
                settime(res.time);
                setreason(res.reason);
               

            }).catch((err) => {
                alert(err.message);
            })
        }
        getappointment();
    }, [])




//update function
    function sendData(e) {

        e.preventDefault();
    
        const newAppointment = {
          name,
          contact,
          nic, dogid, fee, date, time, reason
        }
    
        axios.post("http://localhost:8000/appointment/", newAppointment).then(() => {
          ("Appointment added")
          setName('');
          setContact('');
          setNIC('');
          setdogid('');
          setfee('');
          setdate('');
          settime('');
          setreason('');
          alert("Appointment added added");
          window.location = `/viewappointment`;
    
        }).catch((err) => {
          alert("error");
        })
      }




    //delete funtion
    function onDelete(_id){
        console.log(_id);
        axios.delete("http://localhost:8000/appointment/"+_id ).then((res) =>{
           alert('Deleted Successfully'); 
           window.location.reload();
       }).catch((err) => {
           alert(err.message);
       })
      }

    
      function handleShow(_id){
        
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
                <h1 style={{color:'white'}}>Appoinments</h1>
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
                

                <Form onSubmit={sendData}>
                  <Row>
                    <Col>
                      <br />
                      <div style={{ paddingLeft: '10vh' }}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label style={{ color: 'white' }}>Name : </Form.Label>
                          <Form.Control type="text"
                            onChange={(e) => setName(e.target.value)}

                            placeholder=" Enter Name" style={{
                              backgroundColor: '#010020',
                              color: '#F62681'
                            }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label style={{ color: 'white' }}>Mobile Number: </Form.Label>
                          <Form.Control type="text"
                            onChange={(e) => setContact(e.target.value)}

                            placeholder=" Enter Mobile Number" style={{
                              backgroundColor: '#010020',
                              color: '#F62681'
                            }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label style={{ color: 'white' }}>NIC: </Form.Label>
                          <Form.Control type="text"
                            onChange={(e) => setNIC(e.target.value)}

                            placeholder=" Enter NIC" style={{
                              backgroundColor: '#010020',
                              color: '#F62681'
                            }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label style={{ color: 'white' }}>Dog ID: </Form.Label>
                          <Form.Control type="text"
                            onChange={(e) => setdogid(e.target.value)}

                            placeholder=" Enter Dog ID" style={{
                              backgroundColor: '#010020',
                              color: '#F62681'
                            }} />
                        </Form.Group>

                       
   
                      </div>

                      <br />
                    </Col>
                    <Col>
                      <br />
                      <div>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label style={{ color: 'white' }}>Fee: </Form.Label>
                          <Form.Control type="text"
                            onChange={(e) => setfee(e.target.value)}

                            placeholder=" Enter Fee" style={{
                              backgroundColor: '#010020',
                              color: '#F62681'
                            }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label style={{ color: 'white' }}>Date: </Form.Label>
                          
                         <Form.Control type="date"
                            onChange={(e) => setdate(e.target.value)}

                            placeholder='Select date' style={{
                              backgroundColor: '#010020',
                              color: '#F62681'
                            }} />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label style={{ color: 'white' }}>Time: </Form.Label>
                          <Form.Control
                           style={{
                            backgroundColor: '#010020',
                            color: '#F62681'
                          }}
                          type="time"
                            onChange={(e) => settime(e.target.value)}

                            placeholder='Select Time'
                             />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label style={{ color: 'white' }}>Reason: </Form.Label>
                          <Form.Control type="text" as="textarea" rows={2}
                            onChange={(e) => setreason(e.target.value)}

                            placeholder=" Enter Reason" style={{
                              backgroundColor: '#010020',
                              color: '#F62681'
                            }} />
                        </Form.Group>


                      </div>

                      <br />
                    </Col>
                  </Row>
                  <div style={{ paddingLeft: "50%" }}>
                    <Button type="submit">ADD</Button>
                  </div>
                </Form>

            </div>
        </div>



                </Card>

            </div>
        </div>


    );

}
export default EditAppointment;



