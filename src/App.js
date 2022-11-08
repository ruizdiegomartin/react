
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import ItemDetailContainer from './components/ItemDetailContainer';

export default function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/category/:idcategory' element={<ItemListContainer/>} />
        <Route path='/item/:iditem' element={<ItemDetailContainer/>} />
        <Route />
      </Routes>
      <Footer/> 
    </BrowserRouter>
  );
};

