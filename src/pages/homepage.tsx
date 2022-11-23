import { CoinsList } from 'modules/homepage/coinList/components/coinsList';
import { Description } from 'modules/homepage/description/components/description';
import { RootState } from 'modules/redux/store';
import { Navbar } from '../modules/components/navbar/navbar';
import { useSelector } from 'react-redux';
import { Footer } from 'modules/components/footer/footer';

export const Homepage = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={theme}>
      <Navbar />
      <Description />
      <CoinsList />
      <Footer />
    </div>
  );
};
