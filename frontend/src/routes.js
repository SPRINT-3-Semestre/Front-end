import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Exhibition from './pages/Dashboard/ExhibitionEditor'
import Portfolio from './pages/Dashboard/Portfolio';
import EditInfo from './pages/User/EditInfo';

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
          <Route path="/ExhibitionEditor" element={<Exhibition/>}/>
          <Route path="/Portfolio/editor" element={<Portfolio/>}/>
          <Route path="/EditarInformacoes" element={<EditInfo/>}/>
        </Routes> 
      </Router>
        </>
    )
}
export default Rotas;