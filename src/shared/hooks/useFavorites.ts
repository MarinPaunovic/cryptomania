import { addDoc, collection, deleteDoc, doc, onSnapshot, query, where } from 'firebase/firestore';
import { db } from 'modules/db/db';
import { AddFavoritesProps, FavoritesData } from 'modules/homepage';
import { RootState } from 'modules/redux/rootReducer';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Array<FavoritesData>>([]);
  const { auth } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!auth.uid) return;
    const unsub = onSnapshot(
      query(collection(db, 'favorites'), where('uid', '==', auth.uid)),
      (snap) => {
        const favorites: Array<FavoritesData> = [];
        snap.docs.map((item) => {
          favorites.push({ name: item.data().name, id: item.id });
        });
        setFavorites(favorites);
      },
    );
    return () => {
      unsub();
    };
  }, [auth.uid]);

  const addFavorites = async ({ name, uid }: AddFavoritesProps) => {
    if (favorites.some((favorites) => favorites.name === name)) {
      const id = favorites.find((favorites) => favorites.name === name)?.id;
      if (!id) return;
      await deleteDoc(doc(db, 'favorites', id));
      return;
    }
    await addDoc(collection(db, 'favorites'), { name, uid: uid });
  };

  return { favorites, addFavorites };
}
