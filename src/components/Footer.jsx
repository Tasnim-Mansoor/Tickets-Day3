import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-12 text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} TicketOffice. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;