import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import HomePage from './pages/Home';
import Contact from './pages/Contact';
import KnowHowPage from './pages/KnowHow';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/know-how" element={<KnowHowPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButton />
      </div>
    </Router>
  );
}

export default App;
