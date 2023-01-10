import { faCheck, faCopy, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from 'modules/db/db';
import { useEffect, useState } from 'react';
import { SavedAddressActionsData } from '../types';

export const SavedAddressActions: React.FC<SavedAddressActionsData> = ({ address, id }) => {
  const [isCopy, setIsCopy] = useState(false);

  const handleDelete = () => {
    deleteDoc(doc(db, 'savedAddresses', id));
  };

  const handleCopy = () => {
    if (!address) return;
    navigator.clipboard.writeText(address).then(() => {
      setIsCopy(true);
    });
  };

  useEffect(() => {
    if (!isCopy) return;
    const timerId = setTimeout(() => {
      setIsCopy(false);
    }, 1500);
    return () => {
      clearTimeout(timerId);
    };
  }, [isCopy]);

  return (
    <div className="saved-addresses-buttons fr">
      <button className="saved-addresses-copy f" onClick={() => handleCopy()}>
        {!isCopy ? (
          <FontAwesomeIcon icon={faCopy} className="icon" />
        ) : (
          <FontAwesomeIcon icon={faCheck} className="icon" />
        )}
        <span className="tooltip">Copy</span>
      </button>
      <button className="saved-addresses-delete f" onClick={() => handleDelete()}>
        <FontAwesomeIcon icon={faTrash} className="icon" />
        <span className="tooltip">Delete</span>
      </button>
    </div>
  );
};
