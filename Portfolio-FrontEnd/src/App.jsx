import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import MeuPortfolio from './Pages/MeuPortfolio';
import Register from './Pages/Register';

import UserContext from './contexts/UserContext';
import { useState } from 'react';
import { ReloadContext } from './contexts/ReloadContext';

const App = () => {
  const [user, setUser] = useState({});
  const [reload, setReload] = useState(true);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ReloadContext.Provider value={{reload, setReload}}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/meuportfolio" element={<MeuPortfolio />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>
      </ReloadContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
