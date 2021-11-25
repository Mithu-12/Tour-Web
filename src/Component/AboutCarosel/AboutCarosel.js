
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './AboutCarosel.css'

const AboutCarosel = () => {
    return (
        <Carousel className='container my-5'>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 caroselImg"
            src="https://www.kstdc.co/wp-content/themes/kstdc/images/inbg.jpg"
          />
          <Carousel.Caption>
            <h3>Cardiovascular machines</h3>
            <p>We want to help you achieve your health and fitness goals, and transform your body, by offering the best fitness equipment and knowledge you need.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100 caroselImg"
            src="https://amazingtoursbd.com/tour_image/1605345717.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Rowing machine (aka rower)</h3>
            <p>We want to help you achieve your health and fitness goals, and transform your body, by offering the best fitness equipment and knowledge you need.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 caroselImg"
            src="https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Recumbent exercise bike</h3>
            <p>We want to help you achieve your health and fitness goals, and transform your body, by offering the best fitness equipment and knowledge you need.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default AboutCarosel;