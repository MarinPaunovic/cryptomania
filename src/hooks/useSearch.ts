import { Control, useWatch } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'modules/redux/rootReducer';
import { CoinsArray } from 'modules/redux/coinList/coinListSlice';

interface FormData {
  search: string;
}

export const useSearch = ({ control }: { control: Control<FormData> }) => {
  const [wSearch, setWSearch] = useState('');
  const [searchList, setSearchList] = useState<Array<string>>();
  const coinList = useSelector((state: RootState) => state.coinList.coinList);

  const handleSearch = (search: string) => {
    const map = <string[]>[];
    coinList.map((item) => {
      if (item.name.toLocaleLowerCase().startsWith(search)) map.push(item.name);
      return;
    });
    setSearchList(map);
    setWSearch(search);
  };

  const onSubmit = () => {
    console.log('prvi coin select');
  };

  return { onSubmit, searchList, handleSearch, wSearch };
};
