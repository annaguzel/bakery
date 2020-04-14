// src/components/Footer.js 
import React from 'react';
import '../App.css';

const Footer = () => {
  return (
      <footer style={{backgroundColor:"black",color:"white"}} className="page-footer font-small pt-4">
        <div className="container text-center text-md-left">
        </div>
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <span> AYO-team</span>
        </div>
      </footer>
  );
};
export default Footer;