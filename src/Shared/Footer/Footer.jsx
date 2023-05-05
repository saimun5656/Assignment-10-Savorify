import React from 'react';

const Footer = () => {
    return (
        <div className='w-11/12 p-2 mx-auto'>
           <footer className="footer bg-neutral text-neutral-content">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </div> 
 
</footer> 
 <hr/> 
  <h1 className='my-3 -2'>copyright</h1>
        </div>
    );
};

export default Footer;