//--------------------- Link Start -------------------------------------------- 

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Front_page from '../src/pages/Frontend/front_page';
import Home from './pages/Frontend/Home';
import From from './pages/Frontend/form';
// --------------------- Link End --------------------------------------------

// --------------------- Function Start --------------------------------------------
function App () {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Front_page />} />
          <Route path='header' element= {<Header />} />
          <Route path='home' element= {<Home />} />
          <Route path='form' element= {<From />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
// --------------------- Function End --------------------------------------------
