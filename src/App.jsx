import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css'

function App() {

  const allowForPrompt = () => {
    prompt("where are you?");
  };

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navpages">
            <a className="logo" href="/">The Food Loop</a>
            <a href="/">Home</a>
            <a href="/locate">Locate Me</a>
            <a href="/network">Our Network</a>
            <a href="/involved">Get Involved</a>
          </div>
        </div>
      </nav>
      <div className="mainsection">
        <div className="main-content">
          <div className="loop-section">
            <div className="loop-text">
              <div className="main-line">The</div>
              <div className="main-line">Food</div>
              <div className="main-line">Loop</div>
            </div>
          </div>

          <div className="right-section">
            <p className="tagline">
              A guide to food pantries, fridges, meal programs,
              <br />
              and mental health resources in the Chicagoland area
            </p>
            <button onClick={allowForPrompt} className="search-btn">
              find a pantry near me
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
