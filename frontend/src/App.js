import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Exhibition from './pages/Dashboard/Editor/ExhibitionClient'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>   
          <Route path="*" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/ExhibitionEditor" element={<Exhibition/>}/>
        </Routes> 
      </Router>
    </div>
  );
}

export default App;