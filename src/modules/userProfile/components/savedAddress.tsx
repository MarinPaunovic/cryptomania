import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from 'modules/db/db';
import { FormProvider, useForm } from 'react-hook-form';
import { Input } from 'modules/components';
import { useSavedAddresses } from 'modules/userProfile/hooks/useSavedAddresses';
import { SavedAddressesForm, SavedAddressesFormData } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faX } from '@fortawesome/free-solid-svg-icons';
import { SavedAddressActions } from './savedAddressActions';
import { useSearchAddress } from '../hooks/useSearchAddress';
import { useSelector } from 'react-redux';
import { RootState } from 'modules/redux/rootReducer';

export const SavedAddress = () => {
  const [isForm, setIsForm] = useState(false);
  const { searchAddresses, handleSearch, isSearch } = useSearchAddress();
  const { theme } = useSelector((state: RootState) => state.theme);
  const { list, isDelete, setIsDelete } = useSavedAddresses();
  const form = useForm<SavedAddressesForm>();
  const { handleSubmit, reset, register, getValues } = form;

  const setAddAddress = async (data: SavedAddressesFormData) => {
    if (!auth.currentUser) return;
    await addDoc(collection(db, 'savedAddresses'), {
      name: data.name,
      address: data.address,
      uid: auth.currentUser.uid,
    }).then(() => reset({ name: '', address: '' }));
  };

  useEffect(() => {
    if (isDelete) handleSearch(getValues('search'), list);
    setIsDelete(false);
  }, [isDelete, setIsDelete, getValues, handleSearch, list]);

  return (
    <div className="saved-address-wrapper f jcsbetween ffam-content">
      <div className="saved-addresses-list fc">
        <div className="saved-addresses-actions fr">
          <div className="page-header-search">
            <input
              autoComplete="off"
              id="search-input"
              className="search-input"
              placeholder="Search.."
              {...register('search', {
                onChange: (e: React.FormEvent<HTMLInputElement>) => {
                  handleSearch(e.currentTarget.value, list);
                },
              })}
            ></input>

            {isSearch && (
              <button
                className="saved-addresses-search-action"
                onClick={() => {
                  reset({ search: '' });
                  handleSearch('', []);
                }}
              >
                <FontAwesomeIcon icon={faX} />
              </button>
            )}
          </div>
          <button
            onClick={() => {
              setIsForm(!isForm);
            }}
            className="saved-addressees-form-toggle"
          >
            {isForm ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faPlus} />}
          </button>
        </div>
        {!isSearch ? (
          list &&
          list.map((item, i) => (
            <div key={i} className="saved-addresses-item fr jcsbetween">
              <span className="saved-addresses-content">
                {item.name?.toUpperCase()} : {item.address}
              </span>
              <SavedAddressActions address={item.address} id={item.id} />
            </div>
          ))
        ) : searchAddresses.length > 0 ? (
          searchAddresses.map((item, i) => (
            <div key={i} className="saved-addresses-item fr jcsbetween">
              <span className="saved-addresses-content">
                {item.name?.toUpperCase()} : {item.address}
              </span>
              <SavedAddressActions address={item.address} id={item.id} />
            </div>
          ))
        ) : (
          <p className="saved-addresses-empty-search f">
            You dont have address saved under that name yet!
          </p>
        )}
      </div>
      {isForm && (
        <div className="savedAddresses__form-wrapper">
          <FormProvider {...form}>
            <button
              className={`savedAddresses__form--close ${theme}`}
              onClick={() => {
                setIsForm(!isForm);
              }}
            >
              <FontAwesomeIcon icon={faX} />
            </button>
            <form
              onSubmit={handleSubmit(setAddAddress)}
              className={`saved-address-form fc ${theme}`}
            >
              <h1 className="savedAddresses__form-title">Save address</h1>
              <div className="savedAddresses__form-input fc">
                <h3>Name</h3>
                <Input name="name" />
              </div>
              <div className="savedAddresses__form-input fc">
                <h3>Adress</h3>
                <Input name="address" />
              </div>
              <button type="submit">Save</button>
            </form>
          </FormProvider>
        </div>
      )}
    </div>
  );
};
