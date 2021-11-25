import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../../Hook/useFirebase';
import { Card, Col, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import { NavLink } from 'react-router-dom';

const Dashbord = () => {
    const [orders, setOrders] = useState([]);
    // const {email, id} = useParams();
    const {user} = useFirebase();
    useEffect(() => {
        fetch(`https://mysterious-island-14238.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
        .then(data => setOrders(data))
    }, [orders])
  console.log(orders);
    const handleDelete = id => {
        const proced = window.confirm("Are you sure you want to remove")
        if (proced) {
          console.log(id);
          const uri = `https://mysterious-island-14238.herokuapp.com/orders/${id}`;
            fetch(uri, {
              method: "DELETE",
              headers: {'content-type': 'application/json'}
            })
              .then(res => res.json())
                .then(data => {
                  console.log(data);
                  if (data.deletedCount) {
                    alert('Deleted')
                    const remaining = orders.filter(order => order._id !== id);
                  setOrders(remaining)
                }
                  
                })
         
        }
              
  }

    return (
        <div>
            <h2 className="my-5 text-center">Manage My Orders</h2>
            <h1 className="my-3 text-center">My Orders: {orders?.length}</h1>
            <Row xs={1} md={3} className="g-4 my-5">
                {
                    orders.map(order => (
                        <Col className='mx-auto '>
                        <Card className='card-details cardHeight '>
                          <Card.Img variant="top" src={order?.img} />
                          <Card.Body>
                            <Card.Title className="name">{order?.name}</Card.Title>
                            <Card.Text>
                              <span className='text-danger'>Description :</span> {order.discription}
                            </Card.Text>
                            <button onClick={() =>  handleDelete(order._id)}
                            className="btn py-2 ms-1 w-25 btn-primary">Remove
                            </button>
                            <NavLink to="/confirm" className="btn py-2 d-inline ms-5 w-50 btn-primary">Confirm
                            </NavLink>
                          </Card.Body>
                        </Card>
                      </Col> 

                    ))
                }
            </Row>  
        </div>
    );
};

export default Dashbord;