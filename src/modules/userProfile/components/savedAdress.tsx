import { addDoc, collection, deleteDoc, doc, onSnapshot, query, where } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { auth, db } from 'modules/db/db';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from 'modules/components';

interface SavedAdress {
  name?: string;
  address?: string;
}

interface SnapData extends SavedAdress {
  id: string;
}

export const SavedAdress = () => {
  const [list, setList] = useState<Array<SnapData>>();
  const form = useForm<SavedAdress>();
  const { handleSubmit, getValues } = form;
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
  const handleAdress = async () => {
    const { name, address } = getValues();
    if (!auth.currentUser) return;
    await addDoc(collection(db, 'savedAddresses'), {
      name,
      address,
      uid: auth.currentUser.uid,
    });
  };
  const handleDelete = (id: string) => {
    deleteDoc(doc(db, 'savedAddresses', id));
  };

  return (
    <div className="saved-address-wrapper">
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(handleAdress)} className="saved-address-form f">
          <div className="fc">
            <label>Name</label>
            <Input name="name" />
          </div>
          <div className="fc">
            <label>Adress</label>
            <Input name="address" />
          </div>
          <button type="submit">Save</button>
        </form>
      </FormProvider>
      <div>
        {list &&
          list.map((item, i) => (
            <div key={i}>
              <span>{item.name}:</span>
              <span>{item.address}</span>
              <button onClick={() => handleDelete(item.id)}>x</button>
            </div>
          ))}
      </div>
    </div>
  );
};
