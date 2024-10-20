import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';




function Operatingtime({timeData}) {


    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <Button variant="warning" onClick={handleShow}>
        operating hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title  className='text-warning'>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <ListGroup>
      <ListGroup.Item>Monday : {timeData.monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday : {timeData.tuesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday : {timeData.wednesday}</ListGroup.Item>
      <ListGroup.Item>Thursady : {timeData.thursday}</ListGroup.Item>
      <ListGroup.Item>Friday : {timeData.friday}</ListGroup.Item>
      <ListGroup.Item>Saturday :{timeData.saturday}</ListGroup.Item>
      <ListGroup.Item>Sunday :{timeData.sunday}</ListGroup.Item>
       </ListGroup>

  </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default Operatingtime