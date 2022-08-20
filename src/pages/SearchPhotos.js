import { useState } from 'react';
import { SearchPhotosForm } from '../components/SearchPhotosForm';
import { PhotosList } from '../components/PhotosList';

export const SearchPhotos = ({ addToFavorites }) => {
  //Usamos el useState para cambiar el estado de la varibale
  // y asi poder almacenar el array de imagenes y poder pasarselo
  //al componente SearchResults
  const [searchResults, setSearchResults] = useState([]);

  //Le paso setSearchResults a al primer componente para que cambia el estado y alamacene el array
  // de imagenes como resultado

  //Luego le paso la variable searchResults con el resultado del array
  return (
    <section id='search-photos'>
      <SearchPhotosForm setSearchResults={setSearchResults} />
      {searchResults.length ? (
        <PhotosList photos={searchResults} addToFavorites={addToFavorites} />
      ) : (
        <p>No fotos</p>
      )}
    </section>
  );
};
