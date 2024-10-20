import {React, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Review from './Review';
import Operatingtime from './Operatingtime';


function Restview() {


  //create a state to hold the data from api
  var [viewrestaurent, setrestaurent]=useState([])
 
 
  //function call
  const fetchRest=async()=>{
     const result= await fetch('/restaurent.json')
     result.json().then(data=>{
        setrestaurent(data.restaurants)
     })
  }

  const params=useParams()
  //console.log(params.id);
  // console.log(viewrestaurent);


// find the detailes of the restaurent selected
    const selectedRestaurent= viewrestaurent.find(item=>item.id == params.id)
   console.log(selectedRestaurent);


 
  useEffect(()=>{
           fetchRest()
  },[])



  return (
    <>
    {
     selectedRestaurent?(
    <Row  style={{marginBottom:'5%'}}>
       <Col lg={6} md={6}  className='ps-5  pt-5   pb-5  ms-5 text-center'>
        <img  className= 'border border-warning'    style={{height:'400px', width:'400px'}}  src={selectedRestaurent.image}></img>
         
       </Col>

       <Col   className='me-5 mt-5'>

       <ListGroup variant="flush">
      <ListGroup.Item><h1  className='text-warning'>{selectedRestaurent.name}</h1></ListGroup.Item>
      <ListGroup.Item><p> Address:  <strong>{selectedRestaurent.address}</strong></p></ListGroup.Item>
      <ListGroup.Item><p> cuisine:<strong>{selectedRestaurent.cuisine}</strong></p></ListGroup.Item>
      <ListGroup.Item> 
         
            <div  className='mt-4'> <Operatingtime   timeData={selectedRestaurent.operating_hours}/>  </div>  
             <div  className='mt-3'><Review     reviewData={selectedRestaurent.reviews}/></div> 
             
        </ListGroup.Item>

      
      </ListGroup>
           
       </Col>
    </Row>):""
  
    }
  </>
  )
}

export default Restview