export const Photo = ({ photo, addToFavorites, removeFromFavorites }) => {
  return (
    <>
      <img src={photo.src.small} alt='resultado busqueda' />
      {addToFavorites && (
        <button
          onClick={() => {
            addToFavorites(photo);
            //Se crea esta funcion () y se le hace el call-back ya que
            //en los onclick se pasan funciones sin ejecutar
          }}
        >
          Add a favorito
        </button>
      )}

      {removeFromFavorites && (
        <button
          onClick={() => {
            removeFromFavorites(photo);
          }}
        >
          Eliminar de favoritos
        </button>
      )}
    </>
  );
};
