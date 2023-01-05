import stockReducer, { fetchMetrices, fetchMetricesSuccess } from '../redux/stock/stock';
import * as actionTypes from '../redux/stock/stock';

const mockData = [
  {
    symbol: 'F',
    name: 'Ford Motor Company',
    change: 0.52,
    price: 16.58,
    changesPercentage: 3.237861,
  },
  {
    symbol: 'AMD',
    name: 'Advanced Micro Devices, Inc.',
    change: 6.04,
    price: 115.37,
    changesPercentage: 5.5245595,
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    change: 4.5,
    price: 159.59,
    changesPercentage: 2.901541,
  },
  {
    symbol: 'MULN',
    name: 'Mullen Automotive, Inc.',
    change: 0.15,
    price: 1.75,
    changesPercentage: 9.374998,
  },
  {
    symbol: 'NIO',
    name: 'NIO Inc.',
    change: 3.82,
    price: 18.75,
    changesPercentage: 25.586065,
  },
  {
    symbol: 'SOFI',
    name: 'SoFi Technologies, Inc.',
    change: 0.37,
    price: 8.57,
    changesPercentage: 4.5121937,
  },
  {
    symbol: 'T',
    name: 'AT&T Inc.',
    change: 0.1,
    price: 23.19,
    changesPercentage: 0.43308958,
  },
];

describe('stock reducer', () => {
  it('should render initial state', () => {
    expect(stockReducer(undefined, {})).toEqual({
      loading: true,
      data: [],
      error: false,
      query: '',
    });
  });

  it('test searchQuery in redux', () => {
    expect(
      stockReducer(
        {
          loading: true,
          data: [],
          error: false,
          query: '',
        },
        { type: actionTypes.SEARCH_QUERY, payload: 'ford' },
      ),
    ).toEqual({
      loading: true,
      data: [],
      error: false,
      query: 'ford',
    });
  });

  it('test redux state for error messages', () => {
    expect(
      stockReducer(
        {
          loading: true,
          data: [],
          error: false,
          query: '',
        },
        { type: actionTypes.FETCH_STOCK_METRICES_FAILURE, payload: true },
      ),
    ).toEqual({
      loading: false,
      data: [],
      error: true,
      query: '',
    });
  });

  test('check if actions to cryptos', () => {
    expect(
      stockReducer(
        {
          loading: true,
          data: [],
          error: false,
          query: '',
        },
        fetchMetrices(mockData),
      ),
    ).toBeTruthy();
  });

  it('test redux state for fetched data by using mock data', () => {
    expect(
      stockReducer(
        {
          loading: true,
          data: [],
          error: false,
          query: '',
        },
        fetchMetricesSuccess(mockData),
      ),
    ).toEqual({
      loading: false,
      data: mockData,
      error: false,
      query: '',
    });
  });
});
