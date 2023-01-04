import React from 'react';
import { useSelector } from 'react-redux';
import Company from './Company';
import Spinner from './Spinner';
import ErrorPage from '../pages/ErrorPage';
import '../style/companiesList.css';

const CompniesList = () => {
  const companies = useSelector((state) => state.stockReducer);
  const { loading, error } = companies;
  const searchQuery = companies.query;

  const filterDataSeacrh = companies.data.filter((comp) => {
    if (searchQuery === '') {
      return comp;
    }
    if (comp.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return comp;
    }
    return '';
  });

  if (error) {
    return (
      <>
        <ErrorPage />
      </>
    );
  }

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  return (
    <>
      <div className="companies-list">
        {filterDataSeacrh.map(({
          symbol, name, change, price,
        }) => (
          <Company
            key={symbol}
            symbol={symbol}
            name={name}
            change={change}
            price={price}
          />
        ))}
      </div>
    </>
  );
};

export default CompniesList;
