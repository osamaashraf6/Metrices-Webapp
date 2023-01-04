import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../style/company.css';
import arrow from '../assets/arrow_circle_right.svg';
import bg from '../assets/bg.png';
import up from '../assets/arrow_up.svg';
import down from '../assets/arrow_down.svg';

const Company = ({
  symbol, name, change, price,
}) => (
  <div className="company-card">
    <div className="company-card-arrow-right">
      <NavLink to={`/${symbol}`}>
        <img src={arrow} alt="arrow-right" />
      </NavLink>
    </div>
    <div>
      <h2 className="company-card-title">
        {name}
        <small>
          (
          {symbol}
          )
        </small>
      </h2>
    </div>
    <div className="content">
      <h3>
        {price}
        {' '}
        $
      </h3>
      <h3>
        status:
        {' '}
        {change > 0 ? (
          <img src={up} alt="arrow-up" />
        ) : (
          <img src={down} alt="arrow-down" />
        )}
        {' '}
      </h3>
    </div>
    <div>
      <img className="company-img" src={bg} alt="bg" />
    </div>
  </div>
);

Company.propTypes = {
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  change: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Company;
