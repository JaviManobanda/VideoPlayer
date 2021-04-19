/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carusel from '../components/Carusel';
import CaruselItem from '../components/CaruselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
  const initialState = useInitialState(API);
  return (
    <div className='App'>
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carusel>
            <CaruselItem />
          </Carusel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carusel>
          {initialState.trends.map((item) => (
            <CaruselItem key={item.id} {...item} />
          ))}
        </Carusel>
      </Categories>

      <Categories title='Recomendados'>
        <Carusel>
          {initialState.originals.map((item) => (
            <CaruselItem key={item.id} {...item} />
          ))}
        </Carusel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
