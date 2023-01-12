import { Footer, Navbar } from 'modules/components';
import { CoinsList, Description } from 'modules/homepage';

import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';
import { ScrollSync } from 'react-scroll-sync';

export const Homepage = () => {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <div className={theme} id="homepage">
      <Navbar isRegister={false} isLogin={false} isHomepage={true} />
      <ScrollSync>
        <>
          <Description />
          <CoinsList />
        </>
      </ScrollSync>
      <Footer />
    </div>
  );
};
