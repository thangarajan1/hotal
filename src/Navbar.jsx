import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>

    <form action="" className='fixed-top px-5 py-3 bg-success'>
      <div className="form-group">
        <input type="text" className="form-control" placeholder='Search product name'/>
      </div>
    </form>
      <ul class="nav justify-content-around fixed-bottom bg-white">
        <li class="nav-item">
          <Link to={"/"} className="nav-link active">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/favorites"} className="nav-link">
            Favorites
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/categories"} className="nav-link">
            Categories
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/card"} className="nav-link">Card</Link>
        </li>
        <li class="nav-item">
          <Link to={"/account"} className="nav-link">Account</Link>
        </li>
      </ul>
    </>
  );
}
