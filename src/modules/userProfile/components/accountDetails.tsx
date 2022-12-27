import { auth } from 'modules/db/db';

export const AccountDetails = () => {
  return (
    <>
      {auth.currentUser && (
        <div className="account-details-wrapper fc">
          <div className="fc">
            <h2>Email</h2>
            <p>{auth.currentUser.email}</p>
          </div>
          <div className="fc">
            <h2>User since</h2>
            <p>{auth.currentUser.metadata.creationTime}</p>
          </div>
          <div className="fc">
            <h2>Profile picture</h2>
            <img src={`${auth.currentUser.photoURL}`}></img>
          </div>
        </div>
      )}
    </>
  );
};
