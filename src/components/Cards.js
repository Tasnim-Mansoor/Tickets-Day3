import React from 'react';
import './cards.css';

const Cards = () => {
  return (
    <div className="cards-container py-5">
      <div className="container">
        <h2 className="text-center mb-5"></h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card1">
              <div className="align">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>

              <h5 className="font-weight-bold">Vacation Package</h5>
              <p>
                Explore the world with our curated vacation packages. Discover new destinations and create unforgettable memories.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card1">
              <div className="align">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>

              <h5 className="font-weight-bold">Flight Booking</h5>
              <p>
                Book your flights with ease. We offer competitive prices and a seamless booking experience to get you to your destination.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card1">
              <div className="align">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>

              <h5 className="font-weight-bold">Hotel Reservations</h5>
              <p>
                Find the perfect accommodation for your next trip. Our hotel reservations service ensures you get the best deals and amenities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;