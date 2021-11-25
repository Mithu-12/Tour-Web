import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import {  Card, Col, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';

const Confirm = () => {
    const {user} = useFirebase();
    const {id} = useParams();
    let [single, setSingle] = useState([]);

    useEffect(() => {
        fetch(``)
            .then(res => res.json())
            .then(data => setSingle(data))
        
    }, [single])
    console.log(single);
  

    return (
        <div>
            <h1>Order Confirm</h1>
            <h2>Order: pending</h2>
        <Row xs={1} md={3} className="g-4 my-5">
            {
                single.map(sing => (
                    <Col className='mx-auto '>
                    <Card className='card-details cardHeight '>
                      <Card.Body>
                        <Card.Title className="name">{sing?.name}</Card.Title>
                        <Card.Text>
                          <span className='text-danger'>email: </span> {sing?.discription}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col> 

                ))
            }
        </Row>  
    </div>
    );
};

export default Confirm;