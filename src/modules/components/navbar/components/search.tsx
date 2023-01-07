import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSearch } from 'shared/hooks/useSearch';
import { useForm } from 'react-hook-form';
import { useOutsideClick } from 'shared/hooks/useOutsideClick';
import { useSelector } from 'react-redux';
import { RootState } from 'modules/redux/rootReducer';
import { handleString } from 'functions/handleString';
import { Favorites } from 'shared';

export interface FormData {
  search: string;
  hover: string;
}

interface Search {
  isMobile?: boolean;
}

export const Search: React.FC<Search> = ({ isMobile }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [hover, setHover] = useState<string>('');
  const [adjustedRedirectString, setAdjustedRedirectString] = useState('');
  const { onSubmit, handleSearch, searchList } = useSearch();
  const form = useForm<FormData>();
  const { register } = form;

  const ref = useOutsideClick<HTMLDivElement>(() => {
    setIsSearch(false);
  });
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <div className={`page-heared-search-wrapper ${isMobile ? 'mobile' : ''}`} ref={ref}>
      {isMobile ? (
        <div
          tabIndex={0}
          className={`page-header-search mobile ${theme}`}
          onClick={() => {
            setIsSearch(true);
            document.getElementById('search-input')?.focus();
          }}
        >
          <FontAwesomeIcon icon={faSearch} />
        </div>
      ) : (
        <div
          tabIndex={0}
          className="page-header-search"
          onClick={() => {
            setIsSearch(true);
            document.getElementById('search-input')?.focus();
          }}
        >
          <FontAwesomeIcon icon={faSearch} />
          Search
        </div>
      )}
      {isSearch && (
        <div className={`search-results ${theme} ${isMobile ? 'mobile' : ''}`}>
          <form onSubmit={(e) => onSubmit({ hover, e })}>
            <input
              autoComplete="off"
              autoFocus
              id="search-input"
              className="search-input"
              placeholder="Search.."
              {...register('search', {
                onChange: (e: React.FormEvent<HTMLInputElement>) => {
                  handleSearch(e.currentTarget.value);
                },
              })}
            />
            <input type="submit" hidden={true} />
          </form>

          <div id="search-results-list" className={`search-results-list fc`}>
            {searchList && searchList.length > 0 ? (
              searchList?.map((item, i) => (
                <div key={i} className="fr">
                  <div
                    onMouseEnter={() => setHover(item.name)}
                    onMouseLeave={() => console.log(hover)}
                    className={
                      hover.length === 0 && i === 0
                        ? 'search-results-wrapper f first'
                        : hover === item.name
                        ? 'search-results-wrapper f first'
                        : 'search-results-wrapper f'
                    }
                  >
                    <Favorites name={item.name} />
                    <a
                      className="search-results-href"
                      onClick={() => {
                        setAdjustedRedirectString(handleString(item.name));
                      }}
                      href={`https://www.coingecko.com/en/coins/${adjustedRedirectString}`}
                      target="_blank"
                    >
                      <div className="fr jcsbetween">
                        <span className={`search-results-link ${theme}`}>{item.name}</span>
                        <span className={`search-results-link ${theme}`}>{item.rank}</span>
                      </div>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <span className="search-result-start">You are not searching for any coin</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
