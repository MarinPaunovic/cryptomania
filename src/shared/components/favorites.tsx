import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';
import { useFavorites } from 'shared/hooks';
import { FavoritesProps } from 'shared/types';

export const Favorites: React.FC<FavoritesProps> = ({ name }) => {
  const { favorites, addFavorites } = useFavorites();
  const { theme } = useSelector((state: RootState) => state.theme);
  const { auth } = useSelector((state: RootState) => state.auth);

  return (
    <button
      className={`coin-list-favorite-button ${theme}`}
      onClick={() => {
        if (!auth.uid) return;
        addFavorites({ name: name, uid: auth.uid });
      }}
    >
      {!favorites.some((favorite) => favorite.name === name) ? (
        <FontAwesomeIcon icon={faStar} />
      ) : (
        <FontAwesomeIcon icon={faStarSolid} />
      )}
    </button>
  );
};
