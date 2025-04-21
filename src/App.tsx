import { Routes, Route } from 'react-router-dom';
import Results from './pages/Results';
import CarCheckLanding from './pages/Home';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CarCheckLanding />} />
      <Route path="/results/:reg" element={<Results />} />
    </Routes>
  );
};

export default App;
