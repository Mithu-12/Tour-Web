import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-island-14238.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div>
             <div className="container my-5 d-block" >
                <h1 className='text-center'>POPULAR<span className='text-danger'> TOUR PACKAGE</span></h1>
            <Row xs={1} md={3} className="g-4 my-5">
                {
                    services.map(service => <ServiceDetails
                        service={service}
                        key={service.id}
                    ></ServiceDetails>)
                }
            </Row>
            </div>
        </div>
    );
};

export default Services;