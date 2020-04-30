import React from 'react';
import Profile from '../Profile/Profile';
import TabBar from '../TabBar/TabBar';
import RepoTray from '../RepoTray/RepoTray';
import './index.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <div style={{height: '10px', width: '100%'}}></div>
      </div>
      <div className="row">
        <div className="column left">
          <Profile />
        </div>
        <div className="column right">
          <TabBar />
          <RepoTray />
        </div>
      </div>
    </div>
  );
}

export default App;
