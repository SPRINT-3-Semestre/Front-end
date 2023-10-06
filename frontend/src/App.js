import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>   
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/contact" element=""/>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;