import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Exhibition from './pages/Dashboard/ExhibitionEditor'
import Portfolio from './pages/Dashboard/Portfolio';
import MonthlyGains from './pages/Dashboard/MonthlyGains';
import EditInfo from './pages/Dashboard/User/EditInfo';
import Cart from './pages/Dashboard/Cart';
import Chat from './pages/Dashboard/User/Chat';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterSelection from './pages/Auth/RegisterSelection';

function Rotas() {
  return (
    <>
      <Router>
        <Routes>
          {sessionStorage.getItem('authToken') != null ? (
            <>
             z
            </>
          ) : (
            <>
              <Route path="*" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/register-seletor" element={<RegisterSelection />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}
export default Rotas;