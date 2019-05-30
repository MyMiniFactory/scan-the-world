import React from 'react';
import './App.scss';
import Objects from './components/Objects/Objects';

function App() {
  return (
    <div className="scan-the-world">
      <div className="intro">
        <h1>Scan The World</h1>
        <p>Scan The World is a movement archive objects of cultural significance using 3D scanning technologies, producing an extensive platform of content suitable for 3D printing.</p>
      </div>
      <Objects></Objects>
    </div>
  );
}

export default App;
