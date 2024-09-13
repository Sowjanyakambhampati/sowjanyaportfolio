import React from 'react';

function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#333',
      padding: '1rem',
      position: 'fixed', // Fix navbar at the top
      top: 0,            // Align it at the top
      left: 0,
      width: '100%',      // Make it stretch across the full width of the page
      zIndex: 1000        // Make sure it's above other content

    }}>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        padding: 0,
        margin: 0,
      }}>
        <li style={{ margin: '0 15px' }}>
          <a href="#home" style={linkStyle}>Home</a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#aboutme" style={linkStyle}>About Me</a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#contact" style={linkStyle}>Contact</a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#projects" style={linkStyle}>Projects</a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#technologies" style={linkStyle}>Technologies</a>
        </li>
        <li style={{ margin: '0 15px' }}>
          <a href="#resume" style={linkStyle}>Resume</a>
        </li>
      </ul>
    </nav>
  );
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: 'bold',
  padding: '0.5rem 1rem',
  transition: 'color 0.3s ease',
};

const linkHoverStyle = {
  ...linkStyle,
  color: '#ffcc00',
};

// Expor
export default Navbar;