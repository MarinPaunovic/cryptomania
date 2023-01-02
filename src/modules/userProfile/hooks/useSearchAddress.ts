import { useEffect, useState } from 'react';
import { SavedAddressesData, SavedAddressesSearchDtata } from '../types';

export const useSearchAddress = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [searchAddresses, setSearchAddresses] = useState<Array<SavedAddressesData>>([]);
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
