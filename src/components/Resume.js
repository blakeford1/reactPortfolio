import React from 'react';
import Footer from './Footer';

function Resume() {
  return (
    <div>
      <div className='container'>
        <img
          src={'assets/Images/Dev-Resume.png'}
          alt={'...'}
          style={{ paddingTop: '5px' }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
