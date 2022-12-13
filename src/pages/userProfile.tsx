import { Footer, Navbar } from 'modules/components';
import { UserProfile } from 'modules/userProfile';

const UserProfilePage = () => {
  return (
    <div className="user-profile-page-container fc jcsbetween">
      <div>
        <Navbar isUserProfile={true} />
        <UserProfile />
      </div>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
