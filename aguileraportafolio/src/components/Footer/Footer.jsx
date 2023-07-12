import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'


export const Footer = () => {
  return (
    <div className='colorfondo' >

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2023 Copyright:
      <a className='text-white' href='https://www.instagram.com/soylautaa.dev/'>
        "SoyLautaa"
      </a>
    </div>
  </div>
  );
}

