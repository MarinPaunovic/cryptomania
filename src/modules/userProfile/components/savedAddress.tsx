import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from 'modules/db/db';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from 'modules/components';
import { useSavedAddresses } from 'modules/userProfile/hooks/useSavedAddresses';
import { SavedAdress } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { SavedAddressActions } from './savedAddressActions';

export const SavedAddress = () => {
  const [isForm, setIsForm] = useState(false);
  const form = useForm<SavedAdress>();
  const { handleSubmit, reset } = form;
  const list = useSavedAddresses();

  const setAddress = async (data: SavedAdress) => {
    if (!auth.currentUser) return;
    await addDoc(collection(db, 'savedAddresses'), {
      name: data.name,
      address: data.address,
      uid: auth.currentUser.uid,
    }).then(() => reset({ name: '', address: '' }));
  };
  return (
    <div className="saved-address-wrapper f jcsbetween ffam-content">
      <div className="saved-addresses-list fc">
        {list &&
          list.map((item, i) => (
            <div key={i} className="saved-addresses-item fr jcsbetween">
              <span className="saved-addresses-content">
                {item.name?.toUpperCase()} : {item.address}
              </span>
              <SavedAddressActions address={item.address} id={item.id} />
            </div>
          ))}
      </div>
      <button
        onClick={() => {
          setIsForm(!isForm);
        }}
        className="saved-addressees-form-toggle"
      >
        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
      </button>
      {isForm && (
        <FormProvider {...form}>
          <form onSubmit={handleSubmit(setAddress)} className="saved-address-form fc">
            <div className="fc">
              <h3>Name</h3>
              <Input name="name" />
            </div>
            <div className="fc">
              <h3>Adress</h3>
              <Input name="address" />
            </div>
            <button type="submit">Save</button>
          </form>
        </FormProvider>
      )}
    </div>
  );
};
