import { useState } from 'react';
import './SearchPhotosForm.css';

export const SearchPhotosForm = ({ setSearchResults }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = async (event) => {
    try {
      //Evitamos el comportamiento por defecto del formulario
      event.preventDefault();

      //Obtenemos la informacion del input escrito por la persona
      const query = event.target.elements.search.value;

      //Para crear los parametros y contruir la query con parametros
      const searchParams = new URLSearchParams();

      //Para insertar datos en el
      searchParams.append('query', query);
      searchParams.append('locale', 'es-ES');
      searchParams.append('per_page', 80);

      //Obtenemos la informacion de la API con todos los query
      const res = await fetch(
        `https://api.pexels.com/v1/search?${searchParams.toString()}`,
        {
          //Cabecera de authorizacion
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );

      if (!res.ok) {
        setErrorMessage('Error de peticion al servidor');
      }
      //Parseamos el documento obtenido para poder visualizarlo en javascript
      const body = await res.json();

      //Enviamos el resultado mediante el useState
      setSearchResults(body.photos);
    } catch (error) {
      console.error(error.message);
      setErrorMessage(error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'>🔎</label>
        <input
          id='search'
          name='search'
          type='search'
          placeholder='¡Realiza tu busqueda aqui!'
        />
        <button type='submit'>Buscar</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
