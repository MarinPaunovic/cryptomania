import { useState } from 'react';
import { SavedAddressesData } from '../types';

export const useSearchAddress = () => {
  const [searchAddresses, setSearchAddresses] = useState<Array<SavedAddressesData>>([]);
  const [isSearch, setIsSearch] = useState(false);

  const handleSearch = (search: string, list: Array<SavedAddressesData>) => {
    if (!search) {
      setSearchAddresses([]);
      setIsSearch(false);
      return;
    }
    const map = <Array<SavedAddressesData>>[];
    list.map((item) => {
      if (item.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())) {
        map.push({ name: item.name, address: item.address, id: item.id });
        return;
      }
    });
    setSearchAddresses(map);
    setIsSearch(true);
  };

  return { searchAddresses, handleSearch, isSearch };
};
