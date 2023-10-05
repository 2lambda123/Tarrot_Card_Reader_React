import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CardDetail from './Pages/CardDetail';
import About from './Pages/About';

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/home" element={<HomePage/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/carddetail/:id" element={<CardDetail/>}/>

   </Routes>
   </>
  );
}

export default App;
