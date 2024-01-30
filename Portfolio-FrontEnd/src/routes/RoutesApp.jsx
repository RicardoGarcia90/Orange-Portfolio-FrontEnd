import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import MeuPortfolio from '../Pages/MeuPortfolio';
import AddEditProject from '../AddEditProject/AddEditProject';

const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/meuportfolio" element={<MeuPortfolio />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
