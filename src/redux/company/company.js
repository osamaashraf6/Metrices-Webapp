import filterData from '../../utils/utils';

const FETCH_COMPANY_REQUEST = 'FETCH_COMPANY_REQUEST';
const FETCH_COMPANY_SUCCESS = 'FETCH_COMPANY_SUCCESS';
const FETCH_COMPANY_FAILURE = 'FETCH_COMPANY_FAILURE';
const CLEAR_COMPANY = 'CLEAR_COMPANY';

const fetchCompanySuccess = (company) => ({
  type: FETCH_COMPANY_SUCCESS,
  payload: company,
});

const fetchCompanyFailure = (error) => ({
  type: FETCH_COMPANY_FAILURE,
  payload: error,
});

const fetchCompanyRequest = () => ({
  type: FETCH_COMPANY_REQUEST,
});

export const clearCompany = () => ({
  type: CLEAR_COMPANY,
});

const intialState = {
  loading: true,
  data: [],
  error: false,
  isDataStored: false,
};

const API_KEY = '643ca28df378efcc88bc889ff2e5c15c';
const BASE_URL = 'https://financialmodelingprep.com/api/v3';
export const fetchCompany = (symbol) => (dispatch) => {
  dispatch(fetchCompanyRequest());
  fetch(`${BASE_URL}/income-statement/${symbol}?limit=120&apikey=${API_KEY}`).then((response) => response.json()).then((data) => dispatch(fetchCompanySuccess(filterData(data)))).catch(() => dispatch(fetchCompanyFailure(true)));
};

const companyReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_COMPANY_REQUEST:
      return { ...state, loading: true };

    case FETCH_COMPANY_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: false,
        isDataStored: true,
      };

    case FETCH_COMPANY_FAILURE:
      return {
        data: [],
        loading: false,
        error: action.payload,
        isDataStored: false,
      };

    case CLEAR_COMPANY:
      return { data: [], loading: false, error: false };

    default:
      return state;
  }
};
export default companyReducer;
