import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import CompniesList from '../components/CompniesList';
import Company from '../components/Company';
import SearchFrom from '../components/SearchFrom';
import Header from '../components/Header';

describe('Test react components', () => {
  it('header renders correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it('Test CompniesList renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <CompniesList />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('Test Company renders correctly', () => {
  const item = {
    symbol: 'APPL',
    name: 'Apple',
    change: 1.5,
    price: 14,
  };
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Company
          symbol={item.symbol}
          name={item.name}
          change={item.change}
          price={item.price}
        />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('Test Search input renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <SearchFrom />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
