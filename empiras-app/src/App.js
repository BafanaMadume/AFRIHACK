import React from 'react';

function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full height of the viewport
    backgroundColor: '#282c34',
    color: 'white',
    textAlign: 'center',
  };

  const logoStyle = {
    height: '150px',
    marginBottom: '20px',
  };

  const linkStyle = {
    color: '#61dafb',
    fontSize: '20px',
    marginTop: '20px',
    textDecoration: 'none',
  };

  return (
    <div style={containerStyle}>
      <img src="/logo.svg" style={logoStyle} alt="logo" />
      <p>
        Empires Global
      </p>
      <a
        style={linkStyle}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
