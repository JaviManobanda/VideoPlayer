/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carusel from '../components/Carusel';
import CaruselItem from '../components/CaruselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import useMovie from '../hooks/useMovie';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';
const nowPlaying = 'movie/now_playing';
const popular = 'movie/popular';
const topRated = 'movie/top_rated';

const App = () => {
  const nowPlayingMovies = useMovie(nowPlaying);
  const popularMovies = useMovie(popular);
  const topRatedMovies = useMovie(topRated);
  //const initialState = useInitialState(API);

  return (
    <div className='App'>
      <Header />
      <Search />
      <Categories title='Mi lista'>
        <Carusel>
          {nowPlayingMovies.results.map((item) => (
            <CaruselItem key={item.id} {...item} />
          ))}
        </Carusel>
      </Categories>
      <Categories title='Tendencias'>
        <Carusel>
          {popularMovies.results.map((item) => (
            <CaruselItem key={item.id} {...item} />
          ))}
        </Carusel>
      </Categories>

      <Categories title='Recomendados'>
        <Carusel>
          {topRatedMovies.results.map((item) => (
            <CaruselItem key={item.id} {...item} />
          ))}
        </Carusel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
