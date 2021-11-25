import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useFirebase from '../../Hook/useFirebase';
import { Card, Col, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    // const {email, id} = useParams();
    const {user} = useFirebase();
    useEffect(() => {
        fetch(`https://mysterious-island-14238.herokuapp.com/allOrder`)
            .then(res => res.json())
        .then(data => setOrders(data))
    },[orders])
    const removeItem = (id) => {
        const proced = window.confirm("Are you sure you want to remove")
        if (proced) {
            console.log(id);
            fetch(`https://mysterious-island-14238.herokuapp.com/allOrder/${id}`, {
              method: "DELETE",
              headers: {'content-type': 'application/json'}
            })
              .then(res => res.json())
                .then(data => {
                  console.log(data);
                  if (data.deletedCount) {
                    alert('Deleted')
                  const remaining = orders.filter(order => order._id !== id)
                  setOrders(remaining)
                }
                  
                })
         
        }
              
            }
    // console.log(orders);

    return (
        <div>
            <h2 className="my-5 text-center">Manage All Orders</h2>
            <h1 className="my-3 text-center">Total Orders: {orders?.length}</h1>
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
                            <button onClick={() =>  removeItem(order._id)}
                            className="btn py-2 ms-1 w-50 btn-primary">Remove
                            </button>
                          </Card.Body>
                        </Card>
                      </Col> 

                    ))
                }
            </Row>  
        </div>
    );
};

export default ManageAllOrders;