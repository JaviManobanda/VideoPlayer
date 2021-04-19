import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  /*
  videos: es el nombre de la variable que se asigna para guardar el estado
  setVideos: permite actualizar a ese estado*/
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });
  /* pide 2 argunemntos
     1. el fetch de la api
     2. para escuchar si existe algun cambio y asi volver a ejecutarse.
     caso contrario entra a un loop infinito*/

  useEffect(() => {
    fetch(API)
      /* cuando se reciba la respuesta la transformas en .json */
      .then((response) => response.json())
      .then((data) => setVideos(data)); /* la info la pasa a setVideos */
  }, []);

  return videos;
};

export default useInitialState;
