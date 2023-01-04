import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchMetrices } from './redux/stock/stock';
import StocksPage from './pages/StocksPage';
import StockDetailPage from './pages/StockDetailPage';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMetrices());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<StocksPage />} />
        <Route path="*" element={<StocksPage />} />
        <Route path="/:symbol" element={<StockDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
