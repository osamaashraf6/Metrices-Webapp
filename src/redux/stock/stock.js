const FETCH_STOCK_METRICES_REQUEST = 'FETCH_STOCK_METRICES_REQUEST';
export const FETCH_STOCK_METRICES_SUCCESS = 'FETCH_STOCK_METRICES_SUCCESS';
export const FETCH_STOCK_METRICES_FAILURE = 'FETCH_STOCK_METRICES_FAILURE';
export const SEARCH_QUERY = 'SEARCH_QUERY';

export const searchQuery = (query) => ({
  type: SEARCH_QUERY,
  payload: query,
});

export const fetchMetricesSuccess = (metrices) => ({
  type: FETCH_STOCK_METRICES_SUCCESS,
  payload: metrices,
});

const fetchMetricesFailure = (error) => ({
  type: FETCH_STOCK_METRICES_FAILURE,
  payload: error,
});

const fetchMetricesRequest = () => ({
  type: FETCH_STOCK_METRICES_REQUEST,
});

const intialState = {
  loading: true,
  data: [],
  error: false,
  query: '',
};

const API_KEY = '643ca28df378efcc88bc889ff2e5c15c';
const BASE_URL = 'https://financialmodelingprep.com/api/v3';
export const fetchMetrices = () => (dispatch) => {
  dispatch(fetchMetricesRequest());
  fetch(`${BASE_URL}/stock_market/actives?apikey=${API_KEY}`)
    .then((response) => response.json()).then((data) => dispatch(fetchMetricesSuccess(data)))
    .catch(() => dispatch(fetchMetricesFailure(true)));
};

const stockReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_STOCK_METRICES_REQUEST:
      return { ...state, loading: true };

    case FETCH_STOCK_METRICES_SUCCESS:
      return { ...state, data: action.payload, loading: false };

    case FETCH_STOCK_METRICES_FAILURE:
      return {
        data: [],
        loading: false,
        error: action.payload,
        query: '',
      };

    case SEARCH_QUERY:
      return { ...state, query: action.payload };

    default:
      return state;
  }
};
export default stockReducer;
