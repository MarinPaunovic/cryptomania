import { onAuthStateChanged, signOut } from '@firebase/auth';
import { auth } from 'modules/db/db';
import { RootState } from 'modules/redux/rootReducer';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AccountDetails } from './accountDetails';
import { SavedAddress } from './savedAddress';

export const UserProfile = () => {
  const [user, setUser] = useState('');
  const [whatComponent, setWhatComponent] = useState<JSX.Element | null>(<AccountDetails />);
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user && user.displayName) {
        setUser(user.displayName);
      }
    });

    return () => {
      unsub();
    };
  }, []);
  useEffect(() => {
    console.log('in');
    return () => {
      console.log('out');
    };
  }, []);
  return (
    <div className={`${theme}`}>
      <div className={`main-align`}>
        <div className={`user-profile-wrapper ${theme} g`}>
          <aside className="user-profile-menu fc">
            <h1>Hi, {user}</h1>
            <button
              onClick={() => setWhatComponent(<AccountDetails />)}
              className={
                whatComponent && whatComponent.type.name == 'AccountDetails'
                  ? `focus ${theme}`
                  : `${theme}`
              }
            >
              Account Details
            </button>
            <button
              onClick={() => setWhatComponent(<SavedAddress />)}
              className={
                whatComponent && whatComponent.type.name == 'SavedAddress'
                  ? `focus ${theme}`
                  : `${theme}`
              }
            >
              Saved adresses
            </button>
            <button
              onClick={() => setWhatComponent(null)}
              className={whatComponent == null ? `focus ${theme}` : `${theme}`}
            >
              My portfolio
            </button>
            <button className={theme} onClick={() => signOut(auth)}>
              Logout
            </button>
          </aside>
          <div className="splitter"></div>
          <div className="component-wrapper">{whatComponent}</div>
        </div>
      </div>
    </div>
  );
};
