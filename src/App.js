import React from 'react';
import './App.scss';
import Objects from './components/Objects/Objects';
import TopBar from './components/TopBar/TopBar';
import SocialBar from './components/SocialBar/SocialBar';
import Search from './components/Search/Search';

function App() {
  return (
    <React.Fragment>
      <TopBar/>
      <SocialBar/>
      <div className="scan-the-world">
        <div className="intro">
          <h1><b>scan</b> the <i>world</i></h1>
          <p>Scan The World is a movement archive objects of cultural significance using 3D scanning technologies, producing an extensive platform of content suitable for 3D printing.</p>
        </div>
        <Search/>
        <Objects/>
      </div>
    </React.Fragment>
  );
}

export default App;
