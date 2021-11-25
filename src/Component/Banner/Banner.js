import './Banner.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner-container mb-5">
        <div className="">
      <div className="banner">
        <div className="col">
              <div className=''>
                <div className='ms-4 bannerStyle'>
                  <h5 className="text-danger">WELCOME TO AVENTOURA</h5>
          <h1 className="title text-center">
          Explore new worlds<br />
             <span ClassName="text"> with us</span>
          </h1>
          <h5 className="text-white mt-3 textWight">
          Travel marketers are not just selling trips abroad – they’re selling dreams, adventure, and memories. But travel trends change rapidly, and this can prove tricky travel or tour operation service.
          </h5>
             {
                <NavLink to="/about">
                <button className="mt-3  about-btn">About Us</button> 
                </NavLink>                    
            }
          </div>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  </div>
    );
};

export default Banner;