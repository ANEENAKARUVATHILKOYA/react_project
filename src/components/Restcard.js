import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from   'react-router-dom';

function Restcard({restdata}) {

  


  return (
    <div>
       
       <Link  to={`/view-restaurent/${restdata.id}`}  style={{textDecoration:'none'}}>

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

    </Link>

    </div>
  )
}

export default Restcard