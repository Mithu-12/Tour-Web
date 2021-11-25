import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Offer from '../Offer/Offer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Offer></Offer>
        </div>
    );
};

export default Home;