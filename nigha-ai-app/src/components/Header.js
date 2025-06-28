
import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <>
      <header className="app-header">
        <h1>NIGHA - AI Safety Monitoring</h1>
      </header>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/sos">SOS</Link>
        <Link to="/voice">Voice</Link>
        <Link to="/geo">Geo-fencing</Link>
        <Link to="/incident">Incident</Link>
        <Link to="/anonymous">Anonymous</Link>
        <Link to="/chatbot">Chatbot</Link>
      </nav>
    </>
  );
};

export default Header;
