import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';

export const AccountDetails = () => {
  const auth = useSelector((state: RootState) => state.auth.auth);
  if (auth.metadata) console.log(auth.metadata);
  return (
    <>
      {auth.uid && (
        <div className="account-details-wrapper fc">
          <div className="fc">
            <h2>Email</h2>
            <p>{auth.email}</p>
          </div>
          <div className="fc">
            <h2>User since</h2>
            {auth.metadata && <p>{auth.metadata.creationTime}</p>}
          </div>
          <div className="fc">
            <h2>Profile picture</h2>
            <img src={`${auth.photoURL}`}></img>
          </div>
        </div>
      )}
    </>
  );
};
