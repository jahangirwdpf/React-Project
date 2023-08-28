//--------------------- Link Start -------------------------------------------- 
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Frontend/Home.jsx';
// --------------------- Link End --------------------------------------------

// --------------------- Function Start --------------------------------------------
function App () {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
// --------------------- Function End --------------------------------------------
