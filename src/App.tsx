import { useEffect } from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import AppRoutes from './components/routes/routes';
import { useAppDispatch } from './features/store';
import { getFilmsHome } from './features/filmsHome/filmsHomeSlice';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFilmsHome());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
