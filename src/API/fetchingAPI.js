// import axios from 'axios';

const API_KEY = 'c1c49f469a4a562fcad4008d7e66762d';
const BASE_URL = 'https://financialmodelingprep.com/api/v3';

export const fetchMetricesAPI = async () => {
  // eslint-disable-next-line no-console
  fetch(`${BASE_URL}/stock_market/actives?apikey=${API_KEY}`).then((res) => res.JSON()).then((data) => console.log(data));
};

export const fetchCompanyDetailsAPI = async (symbol) => {
  const res = await fetch(
    `${BASE_URL}/profile/${symbol}?apikey=${API_KEY}`,
  );
  const { data } = await res.JSON();
  return data[0];
};

export const fetchCompanyIncomeHistoryAPI = async (symbol) => {
  const res = await fetch(
    `${BASE_URL}/income-statement/${symbol}?limit=120&apikey=${API_KEY}`,
  );
  const { data } = await res.JSON();
  return data;
};
