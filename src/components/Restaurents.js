import { React, useState, useEffect}from 'react';
import Restcard from './Restcard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Restaurents() {

    //create state to hold the data from api
    var [restaurentlist, setrestaurent]=useState([])

    //function to call api
    const fetchData=async()=>{
       const result=await fetch('/restaurent.json')
       result.json().then(
        data=>{
            setrestaurent(data.restaurants)
        }
       )
    }
   // console.log(restaurentlist);
  
   useEffect(()=>{
       fetchData()
   },[])


  return (
    
    <Row  style={{marginLeft:'5%'}}>
      {
        restaurentlist.map(item=>(

           <Col   className='p-4' lg={4}  md={6} >
           <Restcard  restdata={item}> </Restcard>
           </Col>

        ))
      }
    </Row>
  )
 }

export default Restaurents