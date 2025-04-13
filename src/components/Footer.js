import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css'

const Footer = () => {
  return (
    <footer className="py-3 my-4 bg-dark text-white w-100">
      <div className="container-fluid">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
          <Link to="/features" className="nav-link footer-link px-2 text-white text-decoration-none mx-4">
              Features
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-link footer-link px-2 text-white text-decoration-none mx-4">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faqs" className="nav-link footer-link px-2 text-white text-decoration-none mx-4">
              FAQs
            </Link>
          </li>
        </ul>
        <p className="text-center text-white">© 2024 Company, Inc. by Prashant Anand</p>
      </div>
    </footer>
  );
};

export default Footer;
