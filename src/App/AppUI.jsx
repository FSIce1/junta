
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Participants from '../components/Participants';
import Navbar from '../components/Navbar';

function AppUI() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/participantes" element={<Participants />} />
        </Routes>
      </div>
    </Router>
  );
}

export {AppUI};
