import './App.css';
import { useState, useEffect } from 'react';
import { SearchPhotos } from './pages/SearchPhotos';
import { MyPhotos } from './pages/MyPhotos';
function App() {
  //Se crea una variable con el metodo para obtener la informacion de localstorage apenas carge la pagina por primera vez
  // en caso de que no exista ningun array llamado favorites, se obtendra un arrya vacio
  const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

  //Le pasamos al useSatate el storedFavorites para que ejecute el proceso del localstorage
  const [favorites, setFavorites] = useState(storedFavorites);

  //Mediante el useState vamos a poder modificar el estado de los botones para poder redirigir a diferentes partes de la pagina
  const [showingPage, setShowingPage] = useState('search-photos');

  console.log(showingPage);
  //Con el useEffect lo que queremos es que se almacene en el localstorage
  //cuando se renderiza algun componente, y cuando cambia el valor de Favorites
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  //Mediante esta funcion recibimos la imagen y actualizamos el estado
  //copiamos lo que habia antes y agregamos la nueva imagen
  const addToFavorites = (photoToAdd) => {
    //Comprobamos si la foto que vamos a agragar ya existe en los favrotios o no
    const photoExists = favorites.find((photo) => photo.id === photoToAdd.id);

    if (!photoExists) {
      setFavorites([...favorites, photoToAdd]);
    }
  };

  //Funcion para eliminar de favoritos
  const removeFromFavorites = (photoToRemove) => {
    const photoFiltered = favorites.filter(
      (photo) => photo.id !== photoToRemove.id
    );
    setFavorites(photoFiltered);
  };

  return (
    <>
      <header>
        <h1>Portal</h1>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  setShowingPage('search-photos');
                }}
                className={showingPage === 'search-photos' ? 'active' : null}
              >
                Buscar imagenes
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowingPage('my-photos');
                }}
                className={showingPage === 'my-photos' ? 'active' : null}
              >
                Mis favoritos
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {showingPage === 'search-photos' && (
          <SearchPhotos addToFavorites={addToFavorites} />
        )}

        {showingPage === 'my-photos' && (
          <MyPhotos
            favorites={favorites}
            removeFromFavorites={removeFromFavorites}
          />
        )}
      </main>
      <footer>
        <p>Jose Ortega Copyrigth 2022@</p>
      </footer>
    </>
  );
}

export default App;
