import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'modules/redux/rootReducer';
import { SubmitHandler } from 'react-hook-form';
import { handleString } from 'functions/handleString';

interface SearchList {
  name: string;
  rank: number;
}
interface Hover {
  hover: string;
  e: React.FormEvent<HTMLFormElement>;
}
export interface SubmitProp {
  hover: string | undefined;
}

export const useSearch = () => {
  const [searchList, setSearchList] = useState<Array<SearchList>>();
  const list = useSelector((state: RootState) => state.searchList.searchList);

  const handleSearch = (search: string) => {
    if (!search) return setSearchList([]);
    const map = <SearchList[]>[];

    list.map((item) => {
      if (item.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())) {
        map.push({ name: item.name, rank: item.rank });
        return;
      }
    });
    setSearchList(map);
  };

  const onSubmit: SubmitHandler<Hover> = ({ hover, e }) => {
    e?.preventDefault();
    if (!hover && searchList) {
      const adjustedString = handleString(searchList[0].name);
      window.open(`https://www.coingecko.com/en/coins/${adjustedString}`, '_blank');
    }
    const adjustedString = handleString(hover);
    window.open(`https://www.coingecko.com/en/coins/${adjustedString}`, '_blank');
  };

  return { searchList, onSubmit, handleSearch };
};
