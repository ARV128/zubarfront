import logo from './logo.svg';
import './App.css';
import Pocetna from './pages/Pocetna';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './pages/Services';
import Navbar from './components/navigacija/Navbar';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <>  
     <BrowserRouter>  
     <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Pocetna />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<AboutUs/>}></Route>

      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
