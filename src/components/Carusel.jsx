import React from 'react';
import '../assets/styles/components/Carusel.scss';

const Carusel = ({ children }) => (
  <section className='carousel'>
    <div className='carousel__container'>{children}</div>
  </section>
);

export default Carusel;
