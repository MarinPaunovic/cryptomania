import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setIsModal } from 'modules/redux/slices/modalSlice';
import { RootState } from 'modules/redux/rootReducer';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFavorites } from 'shared/hooks';
import { useScrollToggle } from 'shared/hooks/useScrollToggle';
import { FavoritesProps } from 'shared/types';
import { Modal } from './modal';

export const Favorites: React.FC<FavoritesProps> = ({ name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { favorites, addFavorites } = useFavorites();
  const { theme } = useSelector((state: RootState) => state.theme);
  const { auth } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  useScrollToggle(isOpen, 'homepage');
  useScrollToggle(isOpen, 'portfolio');

  const onClose = () => {
    setIsOpen(false);
    dispatch(setIsModal(false));
  };

  const onConfirm = () => {
    addFavorites({ name: name, uid: auth.uid });
    setIsOpen(false);
    dispatch(setIsModal(false));
  };

  const modalProps = {
    isOpen,
    onClose: () => onClose(),
    onConfirm: () => onConfirm(),
    buttonNegative: 'No',
    buttonPositive: 'Yes',
  };

  return (
    <>
      <button
        className={`coin-list-favorite-button ${theme}`}
        onClick={() => {
          if (!auth.uid) return;
          if (favorites.find((fav) => fav.name === name)) {
            setIsOpen(true);
            dispatch(setIsModal(true));
          }
          if (!favorites.find((fav) => fav.name === name)) {
            addFavorites({ name: name, uid: auth.uid });
          }
        }}
      >
        {!favorites.some((favorite) => favorite.name === name) ? (
          <FontAwesomeIcon icon={faStar} />
        ) : (
          <FontAwesomeIcon icon={faStarSolid} />
        )}
      </button>
      {isOpen && (
        <Modal {...modalProps}>
          <>
            <h4 className={`${theme}`}>Remove coin</h4>
            <p
              className={`${theme}`}
            >{`Are you sure that you want to remove ${name} from favorites?`}</p>
          </>
        </Modal>
      )}
    </>
  );
};
