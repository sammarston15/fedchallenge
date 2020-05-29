import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="nav-top">
          <div>blog</div>
          <div>nourish</div>
          <div>shop</div>
        </div>
        <div className="nav-bottom">
          <div>logo</div>
          <div className='nav-topics'>
            <div>exercise</div>
            <div>nutrition</div>
            <div>activity</div>
            <div>sleep</div>
          </div>
          <div>signup button</div>
        </div>
      </div>
    </div>
  );
}

export default App;
