import { signOut } from '@firebase/auth';
import { auth } from 'modules/db/db';
import { RootState } from 'modules/redux/rootReducer';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AccountDetails } from './accountDetails';
import { Watchlist } from './watchlist';
import { SavedAddress } from './savedAddress';
import { usePortfolioCleanup } from 'shared/hooks/usePortfolioCleanup';

export const UserProfile = () => {
  const [whatComponent, setWhatComponent] = useState<JSX.Element>(<AccountDetails />);
  const { theme } = useSelector((state: RootState) => state.theme);
  const authS = useSelector((state: RootState) => state.auth.auth);
  usePortfolioCleanup();

  return (
    <div className={`${theme}`}>
      <div className={`main-align`}>
        <div className={`user-profile-wrapper ${theme} g`}>
          <aside className="user-profile-menu fc">
            <h1>Hi, {authS.displayName}</h1>
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
              onClick={() => setWhatComponent(<Watchlist />)}
              className={
                whatComponent && whatComponent.type.name === 'Watchlist'
                  ? `focus ${theme}`
                  : `${theme}`
              }
            >
              Watchlist
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
