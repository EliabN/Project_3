import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className="bg-primary text-light mt-auto py-3">
      <div className="container flex-row justify-center align-center">
        <div>
          {location.pathname !== '/' && (
            <button className="btn btn-lg btn-light" onClick={() => navigate(-1)}>
              Go Back
            </button>
          )}
        </div>
        <span></span>
        <div className="ml-auto">
          <Link className="btn btn-lg btn-info m-2" to="/">
            Home
          </Link>
          {/* Add more footer buttons LATER*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;