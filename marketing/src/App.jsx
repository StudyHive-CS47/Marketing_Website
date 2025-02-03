import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LearnMore from './pages/LearnMore';
import Documentation from './pages/Documentation';
import BackToTopButton from './components/BackToTopButton';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/documentation" element={<Documentation />} />
      </Routes>
      <BackToTopButton />
    </Router>
  );
}

export default App;
