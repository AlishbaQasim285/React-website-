import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Signin from "../Components2/Signin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSignInClick = () => {
    setIsSignInOpen(true);
  };

  const handleCloseForm = () => {
    setIsSignInOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <nav className="navbar bg-gradient-to-tl from-black via-gray-500 to-slate-800">
      <div className="logo">
        <Link to="/">
          <span>
            The Savvy <b>Store</b>
          </span>
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/men">Men</Link>
        </li>
        <li>
          <Link to="/women">Women</Link>
        </li>
        <li className="new-badge">
          <Link to="/baby-collection">Baby Collection</Link>
          <span className="badge">New</span>
        </li>
        <li className="dropdown">
          <Link to="/pages">Pages ▼</Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="icons">
        <button className="search-button" onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        {isSearchOpen && (
          <div className="search-bar">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
              />
              <button className="search-submit" type="submit">
                Search
              </button>
            </form>
          </div>
        )}
        <button className="icon" onClick={handleSignInClick}>
          <FontAwesomeIcon icon={faUser} />
        </button>
        {isSignInOpen && (
          <Signin isOpen={isSignInOpen} handleCloseForm={handleCloseForm} />
        )}
        <button className="icon cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-badge">1</span>
        </button>
      </div>
    </nav>
  );
};
export default Header;
