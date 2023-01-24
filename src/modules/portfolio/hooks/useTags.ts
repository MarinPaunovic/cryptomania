import { RootState } from 'modules/redux/rootReducer';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useTags = (what: string) => {
  const [tag, setTag] = useState<string>('');
  const { coinList } = useSelector((state: RootState) => state.coinList);

  useEffect(() => {
    if (tag) return;
    const find = coinList.find((find) => find.name === what);
    if (find) setTag(find.symbol);
  }, [coinList, what, tag]);

  return tag;
};
