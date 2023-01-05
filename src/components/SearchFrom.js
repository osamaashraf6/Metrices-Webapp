import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchQuery } from '../redux/stock/stock';
import '../style/searchFrom.css';

const SearchFrom = () => {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.stockReducer);
  return (
    <div className="form-search">
      <input
        value={query}
        className="search-input"
        placeholder="What you search for"
        onChange={(event) => dispatch(searchQuery(event.target.value.trim()))}
      />
    </div>
  );
};

export default SearchFrom;
