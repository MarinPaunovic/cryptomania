import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from 'modules/db/db';
import { RootState } from 'modules/redux/rootReducer';
import { setHoldings } from 'modules/redux/slices/holdings';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface Holdings {
  id: string;
  uid: string;
  amount: number;
  what: string;
  price: number;
}

export const useHoldings = () => {
  const { auth } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, 'holdings'), where('uid', '==', auth.uid)),
      (snap) => {
        const array: Array<Holdings> = [];
        snap.docs.map((item) => {
          array.push({
            id: item.id,
            uid: item.data().uid,
            what: item.data().what,
            amount: item.data().amount,
            price: item.data().price,
          });
        });
        dispatch(setHoldings(array));
      },
    );
    return () => {
      unsub();
    };
  }, [auth.uid, dispatch]);
};
