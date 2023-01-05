import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/error.css';

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div id="mainC">
        <div className="message">
          <h1>404</h1>
          <h3>The page you seek does not exist, try in another time</h3>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              navigate('/');
              window.location.reload();
            }}
            type="button"
            className="error-btn"
          >
            Retry Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
