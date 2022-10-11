import React, { useState, useEffect } from "react";
import { Table, Button,Card } from "react-bootstrap";
import axios from "axios";
import { FaPencilAlt, FaTrashAlt,FaLock } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { Fragment } from "react";

function ViewAll(props) {
    const [dog, setDog] = useState([]);
    const [search, setSearch] = useState("");
    const space2 = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>

    useEffect(() => {

        //get funtion
        function getDog() {
            axios.get("http://localhost:8000/dog/").then((res) => {
                setDog(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getDog();
    }, [])

    // //delete funtion
    // function onDelete(_id){
    //     console.log(_id);
    //     axios.delete("http://localhost:5000/dog/"+_id ).then((res) =>{
    //        alert('Deleted Successfully'); 
    //        window.location.reload();
    //    }).catch((err) => {
    //        alert(err.message);
    //    })
    //   }

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
                <h1 style={{color:'white'}}>Dogs List</h1>
                <div style={{ paddingleft: "10vh", paddingBottom: "1vh", paddingTop: "1vh" }} >

                <div style={{ paddingleft: "2vh", paddingBottom: "1vh", paddingTop: "1vh" }}>
                            <div style={{ paddingBottom: "1vh", paddingTop: "1vh" }}>
                                <input type="text" placeholder="Search from 'dog ID' " className="mr-2"
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
                            <th>Owner Name</th>
                            <th>Address</th>
                            <th>Date of Birth</th>
                      
                            <th>Breed</th>
                            <th>Sex</th>
                            <th>Prescriptions</th>
                       
                        </tr>
                    </thead>
                    <tbody>

                        {dog.filter(Dog => {
                            if (search === "") {
                                return Dog
                            }
                            else if (Dog.dogID?.toLowerCase().includes(search.toLowerCase())) {
                                return Dog
                            }
                        }).
                            map((Dog) => {

                                return (
                                    <tr key={Dog._id}>
                                        <td>{Dog.dogID}</td>
                                        <td>{Dog.dogName}</td>
                                        <td>{Dog.ownerName}</td>
                                        <td>{Dog.address}</td>
                                        <td>{Dog.dob}</td>
                                        <td>{Dog.breed}</td>
                                        <td>{Dog.sex}</td>
                                       
                                        <td>
                                        <Link
                      to={`/AddHealth/${Dog._id}`}
                      className="btn btn-sm expenseButton"
                    > <FaPencilAlt/>
                    </Link> 
                                        </td>

                                 
                                    </tr>

                                );
                            })}

                    </tbody>

                </Table >
                <li className="nav-item" style={{color:'white'}}>
          <Link to={"/New"} className="nav-link active">Add Dog Details</Link>
        </li>
            </div>
        </div>



                </Card>

            </div>
        </div>


    );

}
export default ViewAll;



