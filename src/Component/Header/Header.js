import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
function Header() {
  return (
    <header className="header">
      <div className='header-main'>
        <h1>Books Management</h1>
        <Link to="/createBooks" className='login-button'>Create Books</Link>
        <nav className='header-list'>
          <ul className='header-list-link'>
            <li><Link to="/" className='li-color'>Home</Link></li>
            <li><Link to="/historyRequest" className='li-color'>History Request</Link></li>
            <li><Link to="/contact" className='li-color'>Contact</Link></li>
            <li><Link to="/about" className='li-color'>About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
