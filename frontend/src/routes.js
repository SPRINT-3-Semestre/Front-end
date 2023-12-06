import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ExhibitionEditor from './pages/Dashboard/ExhibitionEditor'
import ExhibitionOrders from './pages/Dashboard/ExhibitionOrders'
import Portfolio from './pages/Dashboard/Portfolio';
import MonthlyGains from './pages/Dashboard/MonthlyGains';
import EditInfo from './pages/Dashboard/User/EditInfo';
import Cart from './pages/Dashboard/Cart';
import Chat from './pages/Dashboard/User/Chat';
import ActiveConversations from './pages/Dashboard/ActiveConversations';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegisterSelection from './pages/Auth/RegisterSelection';

const PrivateRoute = ({ element }) => {
  // Verificar se o usuário está autenticado
  const isAuthenticated = sessionStorage.getItem('authToken') !== null;

  // Se o usuário estiver autenticado, renderize o componente, caso contrário, redirecione para a página de login
  return isAuthenticated ? element : <Navigate to="/login" />;
};

function Rotas() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/exposicao-editor" element={<PrivateRoute element={<ExhibitionEditor />}/>} />
          <Route path="/exposicao-pedidos" element={<PrivateRoute element={<ExhibitionOrders />}/>} />
          <Route path="/portfolio/editor" element={<PrivateRoute element={<Portfolio />}/>} />{/*Precisa colocar um id*/}
          <Route path="/editar-informacoes" element={<PrivateRoute element={<EditInfo />}/>} />
          <Route path="/ganhos-mensais" element={<PrivateRoute element={<MonthlyGains />}/>} />
          <Route path="/carrinho" element={<PrivateRoute element={<Cart />}/>} />
          <Route path="/chat" element={<PrivateRoute element={<Chat />}/>} />
          <Route path="/conversas-ativas" element={<PrivateRoute element={<ActiveConversations />}/>} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-seletor" element={<RegisterSelection />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
export default Rotas;