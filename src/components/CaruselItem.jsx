import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CaruselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const urlImg = 'https://image.tmdb.org/t/p/w500';
const CaruselItem = ({ poster_path, title, release_date }) => (
  <div className='carousel-item'>
    <img
      className='carousel-item__img'
      src={`${urlImg}${poster_path}`}
      alt={title}
    />
    <div className='carousel-item__details'>
      <div>
        <img
          className='carousel-item__details--img'
          src={playIcon}
          alt='Play Icon'
        />
        <img
          className='carousel-item__details--img'
          src={plusIcon}
          alt='Plus Icon'
        />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{`${release_date}`}</p>
    </div>
  </div>
);

/* Aqui se hace las validaciones */
CaruselItem.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CaruselItem;
