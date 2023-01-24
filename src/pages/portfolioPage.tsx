import { Footer, Navbar } from 'modules/components';
import { PortfolioWrapper } from 'modules/portfolio';
import { RootState } from 'modules/redux/rootReducer';
import { useSelector } from 'react-redux';

export const PortfolioPage = () => {
  const { theme } = useSelector((state: RootState) => state.theme);

  return (
    <div className={`portfolio fc jcsbetween ${theme}`} id={'portfolio'}>
      <Navbar />
      <PortfolioWrapper />
      <Footer />
    </div>
  );
};
