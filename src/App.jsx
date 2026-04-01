import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import './App.css';
import Menu from './pages/home/menu/menu.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
