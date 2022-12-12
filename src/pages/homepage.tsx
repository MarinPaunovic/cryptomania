import { Footer, Navbar } from 'modules/components';
import { CoinsList } from 'modules/homepage/coinList';
import { Description } from 'modules/homepage/description';
import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';
import { ScrollSync } from 'react-scroll-sync';

export const Homepage = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div className={theme}>
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
