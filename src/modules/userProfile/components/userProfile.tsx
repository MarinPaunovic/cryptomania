import { onAuthStateChanged } from '@firebase/auth';

import { auth } from 'modules/db/db';
import { RootState } from 'modules/redux/rootReducer';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AccountDetails } from './accountDetails';
import { SavedAdress } from './savedAdress';

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
              onClick={() => setWhatComponent(<SavedAdress />)}
              className={
                whatComponent && whatComponent.type.name == 'SavedAdress'
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
            <button className={theme}>Logout</button>
          </aside>
          <div className="splitter"></div>
          <div>{whatComponent}</div>
        </div>
      </div>
    </div>
  );
};
