import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { auth, db } from 'modules/db/db';
import { useEffect, useState } from 'react';
import { SavedAddressesData } from '../types';

export const useSavedAddresses = () => {
  const [list, setList] = useState<Array<SavedAddressesData>>([]);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    if (!auth.currentUser) return;
    const unsub = onSnapshot(
      query(collection(db, 'savedAddresses'), where('uid', '==', auth.currentUser.uid)),
      (snap) => {
        if (snap.docChanges())
          snap.docChanges().map((change) => {
            if (change.type === 'removed') {
              setIsDelete(true);
            }
          });

        const dataList: Array<SavedAddressesData> = [];
        if (!snap.docs) {
          return;
        }

        snap.docs.map((item) => {
          dataList.push({ name: item.data().name, address: item.data().address, id: item.id });
        });
        setList(dataList);
      },
    );
    return () => {
      unsub();
    };
  }, []);

  return { list, isDelete, setIsDelete };
};
