import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import {  Card } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../Hook/useFirebase';

const PlaceOrder = () => {
    const {user} = useFirebase();
    const {id} = useParams();
    let [singleService, setSingleService] = useState([]);

    useEffect(() => {
        fetch(`https://mysterious-island-14238.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setSingleService(data))
    }, [])

    const handleAddToCart = () => {
        let data = singleService;
        data.email = user.email;
        data.status = 'pending';
        delete data._id
        console.log(data);
        fetch('https://mysterious-island-14238.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
            // alert("deleted")
        })
        
    }

    return (
      <div className="d-flex className='cardWidth text-center'">
        <div className='align-items-center justify-content-center'>
    <Card className='cardWidth'  style={{ width: '45rem' }}>
    <Card.Img variant="top" src={singleService?.img} />
    <Card.Img variant="top" src={singleService?.img1} />
    <Card.Body>
    <Card.Title>{singleService?.name}</Card.Title>
    <Card.Text>
    <span className='text-danger'>Description :</span> {singleService?.discription}
    </Card.Text>
    
     <button  onClick={handleAddToCart} className='btn btn-primary text-center'>Place Order</button>
                 
    </Card.Body>
      </Card>
        </div>
        </div>
    );
};

export default PlaceOrder;