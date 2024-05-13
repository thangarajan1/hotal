import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Favorites from './Favorites';
import Category from './Category.jsx';
import Card from './Card';
import Account from './Account';
import { createContext, useState } from 'react';
import { CartProvider } from 'react-use-cart';

export const cartContact = createContext();

function App() {
  const [flase,setFlase]=useState([]);
  return (
    <>
      <cartContact.Provider value={{ flase, setFlase }}>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hotal" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/categories" element={<Category />} />
              <Route path="/card" element={<Card />} />
              <Route path="/account" element={<Account />} />
            </Routes>
            <Navbar />
          </BrowserRouter>
        </CartProvider>
      </cartContact.Provider>
    </>
  );
}

export default App;
