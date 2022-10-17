import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {ButtonGroup,DropdownButton,Dropdown} from 'react-bootstrap'
import { FaCreativeCommonsNd } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';

function SideBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
      <Button variant="secondary" onClick={handleShow}>
      <FaCreativeCommonsNd/>
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Doggie Care</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ButtonGroup vertical>
      <Button>Button</Button>
      <Button>Button</Button>

      <DropdownButton
        as={ButtonGroup}
        title="Dropdown"
        id="bg-vertical-dropdown-1"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>

      <Button>Button</Button>
      <Button>Button</Button>

      <DropdownButton
        as={ButtonGroup}
        title="Dropdown"
        id="bg-vertical-dropdown-2"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        as={ButtonGroup}
        title="Dropdown"
        id="bg-vertical-dropdown-3"
      >
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>

    <br/><br/><br/><br/>

    <Carousel fade>
  
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/hidl3r/image/upload/v1633112534/itp/lapimg_oxr2tx.jpg"
      alt="First slide"
    />

    <Carousel.Caption >
   
      <h3>If you’re a frequent commuter looking for comfortable and convenient travel and great value for money, Greyhound Australia has got you covered. Our Commuter Pass will take the stress out of your commute! </h3>
      <p>Unlimited travel.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/hidl3r/image/upload/v1633112534/itp/bookbuttonimg_virvgj.jpg"
      alt="Third slide"
    />

    <Carousel.Caption >
    
      <h3>Often travelling between Sydney and Canberra and looking for the best mode of transportation? Look no further with our Commuter Pass. Avoid the traffic, tolls and delays, all the while saving money.</h3>
      <p>Best value for money.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SideBar;