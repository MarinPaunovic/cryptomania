import { setActive } from 'modules/redux/slices/portfolioSlice';
import { RootState } from 'modules/redux/rootReducer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const usePortfolioCleanup = () => {
  const { active } = useSelector((state: RootState) => state.portfolio);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActive('watchlist'));
  }, [dispatch, active]);
};
