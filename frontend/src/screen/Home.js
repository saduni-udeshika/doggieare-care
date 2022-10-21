import React, { useState } from "react"
import { FaLock } from "react-icons/fa";
import { Fragment,Link } from "react";
import { Card, Image,Button, Container,Row, Col, Form } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import axios from "axios";
import SideBar from "./SideBar";

export default function Home() {
    const space2 = <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>




    return (
        
        <div style={{
            backgroundColor: '#010020',
            width: '100% ',
            height: '1000px'
        }}>
            <SideBar/>
            <div style={{ paddingLeft: "10vh", color: 'white', paddingTop: '4vh' }}>
                <p >Doggie Care   {space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}{space2}<FaLock /></p>
            </div>

          

                            
        </div>
    );
}
