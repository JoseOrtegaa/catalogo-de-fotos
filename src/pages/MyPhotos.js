import { PhotosList } from '../components/PhotosList';
import './MyPhotos.css';
export const MyPhotos = ({ favorites, removeFromFavorites }) => {
  return (
    <section>
      <div>
        <h2>Favoritos</h2>
      </div>
      {favorites.length ? (
        <PhotosList
          photos={favorites}
          removeFromFavorites={removeFromFavorites}
        />
      ) : (
        <p>No hay favoritos</p>
      )}
    </section>
  );
};
