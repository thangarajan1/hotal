import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Favorites from './Favorites';
import Category from './Category.jsx';
import Card from './Card';
import Account from './Account';

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
