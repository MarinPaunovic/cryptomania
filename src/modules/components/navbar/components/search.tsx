import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useSearch } from 'hooks/useSearch';
import { Input } from 'modules/components/customs';
import { useForm, useWatch } from 'react-hook-form';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { useSelector } from 'react-redux';
import { RootState } from 'modules/redux/rootReducer';

interface FormData {
  search: string;
}

export const Search = () => {
  const [isSearch, setIsSearch] = useState(false);
  const { register, control, handleSubmit, setValue } = useForm<FormData>();
  const ref = useOutsideClick<HTMLDivElement>(() => setIsSearch(false));
  const theme = useSelector((state: RootState) => state.theme.theme);
  const { onSubmit, searchList, handleSearch, wSearch } = useSearch({ control });
  const search = useWatch({
    control,
    name: 'search',
    defaultValue: '',
  });

  return (
    <div className="page-heared-search-wrapper" ref={ref}>
      <div tabIndex={0} className="page-header-search" onClick={() => setIsSearch(true)}>
        <FontAwesomeIcon icon={faSearch} />
        Search
      </div>
      {isSearch && (
        <div className={`search-results ${theme}`}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="search-input"
              placeholder="Search.."
              {...register('search', {
                onChange: (e: React.FormEvent<HTMLInputElement>) => {
                  // console.log(e.currentTarget.value);
                  handleSearch(e.currentTarget.value);
                },
              })}
            />
          </form>
          {/* wSearch.length */}
          <div className={`search-results-list fc ${theme}`}>
            {searchList !== undefined ? (
              searchList.map((item, i) => (
                <a href={`https://www.coingecko.com/en/coins/${item.toLocaleLowerCase()}`}>
                  <span key={i}>{item}</span>
                </a>
              ))
            ) : (
              <span className="search-result-start">You are still not searching for any coin</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
