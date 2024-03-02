import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import AppRoutes from './components/routes/routes';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
