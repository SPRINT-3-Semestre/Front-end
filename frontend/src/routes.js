import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Exhibition from './pages/Dashboard/ExhibitionEditor'
import Portfolio from './pages/Dashboard/Portfolio';
import MonthlyGains from './pages/Dashboard/MonthlyGains';
import EditInfo from './pages/User/EditInfo';
import Cart from './pages/Dashboard/Cart';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function Rotas(){
    return(
        <>
    <Router>
        <Routes>   
          <Route path="*" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/exposicao-editor" element={<Exhibition/>}/>
          <Route path="/portfolio/editor" element={<Portfolio/>}/>{/*Precisa colocar um id*/}
          <Route path="/editar-informacoes" element={<EditInfo/>}/>
          <Route path="/ganhos-mensais" element={<MonthlyGains/>}/>
          <Route path="/carrinho" element={<Cart/>}/>
        </Routes> 
      </Router>
        </>
    )
}
export default Rotas;