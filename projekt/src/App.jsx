import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import { MovieProvider } from './contexts/WeatherContext';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

const App = () => {
  return (
    <MovieProvider>
      <Router>
        <div className="min-h-screen bg-gray-900">
          <nav className="bg-gray-800 text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-4 flex gap-6">
              <Link to="/" className="hover:text-blue-400 transition font-semibold text-lg">
                🎬 Filmy i Seriale
              </Link>
              <Link to="/about" className="hover:text-blue-400 transition font-semibold">
                O Aplikacji
              </Link>
            </div>
          </nav>

          <div className="px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    </MovieProvider>
  );
};

export default App;
