import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Results from './pages/Results';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results/:reg" element={<Results />} />
    </Routes>
  );
};

export default App;
