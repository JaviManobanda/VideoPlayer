import { useState, useEffect } from 'react';

const setMovie = (command) => {
  const urlApi = 'https://api.themoviedb.org/3/';
  const keyApi = '909388c8d0601ad165be7c921e58d989';
  const apiQuery = `${urlApi}${command}?api_key=${keyApi}`;
  const [movie, setMovie] = useState({ results: [] });

  useEffect(() => {
    fetch(apiQuery)
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, []);

  return movie;
};

export default setMovie;
