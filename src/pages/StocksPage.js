import React from 'react';
import { useSelector } from 'react-redux';
import SearchFrom from '../components/SearchFrom';
import CompniesList from '../components/CompniesList';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';
import '../style/stockPage.css';

const StocksPage = () => {
  const companies = useSelector((state) => state.stockReducer);
  const { loading, error } = companies;

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
      <h1 className="stock-page-title">Stock Metrics</h1>
      <SearchFrom />
      <CompniesList />
    </>
  );
};

export default StocksPage;
