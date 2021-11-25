import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './ServiceDetails.css'
import { Link } from 'react-router-dom';

const ServiceUiDetails = ({service}) => {
  const {_id, name, img, discription } = service;
  return (
    <div>
      <Col className='mx-auto '>
        <Card className='card-details cardHeight '>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="name">{name}</Card.Title>
            <Card.Text>
              <span className='text-danger'>Description :</span> {discription}
            </Card.Text>
            <Link to={`/placeOrder/${_id}`}><button className='btn btnStyle'>BOOK NOW</button></Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ServiceUiDetails;