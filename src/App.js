import React from 'react';
import './style/app.scss';
import NasaPhoto from './component/NasaPhoto';
import About from './component/About';
import NavBar from './component/NavBar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
      <Route element={<About/>} path="/" exact/>
      <Route element={<NasaPhoto/>} path="/NasaPhoto" />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
