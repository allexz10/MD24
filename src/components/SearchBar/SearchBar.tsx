import React from 'react';
import './SearchBar.scss';

type Props = {
  value: string;
  onChange: (event:{ target: { value: string; }; }) => void;
};

const SearchBar: React.FC<Props> = ({ onChange, value }) => (
  <div className="search__inner">
    <span className="search__icon" />
    <input
      className="search_input"
      type="text"
      onChange={onChange}
      placeholder="item...."
      value={value}
    />
  </div>
);

export default SearchBar;
