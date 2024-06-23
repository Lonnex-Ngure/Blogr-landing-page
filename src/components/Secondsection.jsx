// Secondsection.jsx
import React from 'react';
import infrastructureImage from '../assets/illustration-phones.svg';

const Secondsection = () => {
  return (
    <section className="second-section">
      <div className="second-content">
        <img src={infrastructureImage} alt="State of the Art Infrastructure" />
        <div className="text">
          <h3>State of the Art Infrastructure</h3>
          <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
        </div>
      </div>
    </section>
  );
}

export default Secondsection;
