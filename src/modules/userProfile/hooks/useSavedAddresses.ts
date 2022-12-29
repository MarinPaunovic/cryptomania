import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { auth, db } from 'modules/db/db';
import { useEffect, useState } from 'react';
import { SnapData } from '../types';

export const useSavedAddresses = () => {
  const [list, setList] = useState<Array<SnapData>>([]);
  useEffect(() => {
    if (!auth.currentUser) return;

    const unsub = onSnapshot(
      query(collection(db, 'savedAddresses'), where('uid', '==', auth.currentUser.uid)),
      (snap) => {
        const dataList: Array<SnapData> = [];
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
  return list;
};
