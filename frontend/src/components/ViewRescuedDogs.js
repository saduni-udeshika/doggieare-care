import React, { useState, useEffect } from "react";
import { Table, Button,Card } from "react-bootstrap";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt,FaLock } from "react-icons/fa";
import { Fragment } from "react";

function ViewRescuedDogs(props) {
    const [rescuedDogs, setRescuedDogs] = useState([]);
    const [search, setSearch] = useState("");
    const [state, setState] = useState("adopted");
    const space2 = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>

    useEffect(() => {

        //get funtion
        function geRescuedDogs() {
            axios.get("http://localhost:5000/createRescuedDog/").then((res) => {
                setRescuedDogs(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        geRescuedDogs();
    }, [])

    //delete funtion
    function onDelete(_id){
        console.log(_id);
        axios.delete("http://localhost:5000/createRescuedDog/"+_id ).then((res) =>{
           alert('Deleted Successfully'); 
           window.location.reload();
       }).catch((err) => {
           alert(err.message);
       })
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
                            <th>Edit</th>
                            <th><Button>Adopt Puppy</Button></th>
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
                                        
                                        <td>
                                         <Button variant="outline-success" onClick={() => handleShow(RescuedDogs._id)} ><FaPencilAlt/></Button>
                                      
                                        </td>
                                        <td>
                                        <Button variant="outline-primary" onClick={() => adoptPuppy(RescuedDogs._id)} >Adopt Puppy </Button>
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



