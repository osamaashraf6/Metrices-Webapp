import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompany, clearCompany } from '../redux/company/company';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import { grossData, netIncomeData } from '../utils/utils';
import ErrorPage from './ErrorPage';
import Spinner from '../components/Spinner';
import '../style/stockDetailsPage.css';

const StockDetailPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { symbol } = params;
  useEffect(() => {
    dispatch(clearCompany());
    dispatch(fetchCompany(symbol));
  }, [dispatch, symbol]);

  const state = useSelector((state) => state.companyReducer);
  const grossResult = grossData(state.data);
  const netResult = netIncomeData(state.data);
  const { loading, error } = state;

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
    <div className="stock-details-page">
      <div className="title">
        <span>{symbol}</span>
      </div>
      <div className="chart">
        <LineChart result={netResult} />
        <BarChart result={grossResult} />
      </div>
    </div>
  );
};

export default StockDetailPage;
