import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <div
        className={navOpen ? 'hamburger close' : 'hamburger'}
        onClick={() => setNavOpen(!navOpen)}
      >
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>
      <div className={navOpen ? 'nav show' : 'nav'}>
        <Link to="/" className="nav__link" onClick={() => setNavOpen(false)}>
          home
        </Link>
        <Link
          to="/menu"
          className="nav__link"
          onClick={() => setNavOpen(false)}
        >
          menu
        </Link>
        <Link
          to="/cart"
          className="nav__link"
          onClick={() => setNavOpen(false)}
        >
          cart
        </Link>
      </div>
    </>
  );
};
