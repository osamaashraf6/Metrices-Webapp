import axios from 'axios';

const API_KEY = 'c1c49f469a4a562fcad4008d7e66762d';
const BASE_URL = 'https://financialmodelingprep.com/api/v3';

export const fetchMetricesAPI = async () => {
  axios
    .get(`${BASE_URL}/stock_market/actives?apikey=${API_KEY}`)
    .then((data) => console.log(data.data));
};

export const fetchCompanyDetailsAPI = async (symbol) => {
  const res = await axios.get(
    `${BASE_URL}/profile/${symbol}?apikey=${API_KEY}`,
  );
  const { data } = res;
  return data[0];
};

export const fetchCompanyIncomeHistoryAPI = async (symbol) => {
  const res = await axios.get(
    `${BASE_URL}/income-statement/${symbol}?limit=120&apikey=${API_KEY}`,
  );
  const { data } = res;
  return data;
};
