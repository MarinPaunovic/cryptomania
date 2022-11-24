import { useSelector } from 'react-redux';
import { RootState } from 'modules/redux/store';
import { ScrollSyncPane } from 'react-scroll-sync';

export const Description = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <ScrollSyncPane>
      <div className={`coin-description main-align ${theme} `}>
        <div className={`coin-description-wrapper g ${theme}`}>
          <span className="coin-description-main">#</span>
          <span className="coin-description-main">Coin</span>
        </div>
        <div
          className="coin-description-price-wrapper g"
          id="scrollSyncDescription"
        >
          <span className="coin-description-price">Price</span>
          <span className="coin-description-price">1h</span>
          <span className="coin-description-price">24h</span>
          <span className="coin-description-price">7d</span>
        </div>
      </div>
    </ScrollSyncPane>
  );
};
