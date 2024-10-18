import React from 'react';
import Card from 'react-bootstrap/Card';


function Restcard({restdata}) {

  


  return (
    <div>
       <Card style={{ width: '18rem', height:'50vh' } }>
      <Card.Img  style={{height:'30vh'}} variant="top" src={restdata.image}  />
      <Card.Body>
        <Card.Title><strong>{restdata.name}</strong></Card.Title>
        <Card.Text>
                <p>
                  {restdata.address}
                </p>
                <p>
                       cuisine Type: <strong>{restdata.cuisine}</strong>
                </p>
        </Card.Text>
      </Card.Body>
    </Card>
 

    </div>
  )
}

export default Restcard