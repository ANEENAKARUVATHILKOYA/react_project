
import {React, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Review({reviewData}) {

    const [open, setOpen] = useState(false);

  return (
    <div>
        <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="warning"
      >
        Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">

         {
              reviewData.map(item=>(
              <Card body style={{ width: '400px' }}  className='mt-2'>
                 
                 <strong>{item.reviewer}</strong>
                 <p> Rating: {item.rating}</p>
                 <p> Comment: {item.comment}</p>
                
            </Card>
              ))
        }  

          </div>
        </Collapse>
      </div>
    </div>
  )
}

export default Review