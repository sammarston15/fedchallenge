import React from 'react';
import './reset.css';
import './App.scss';
import logo from './media/ifit_logo.png';
import coach from './media/COACH.png';
import gearjunkie from './media/gear-junkie-logo.svg';
import wired from './media/wired-logo.svg';
import mashable from './media/mashable-logo.svg';

function App() {
  const arrowLeft = '<';
  const arrowRight = '>';

  return (
    <div className="app">
      <div className="header">
        <div className="nav-top">
          <div>blog</div>
          <div>nourish</div>
          <div>shop</div>
        </div>
        <div className="nav-bottom">
          <div className='company-logo'>
            <img src={logo} alt="logo" />
            <img src={coach} alt="logo" />
          </div>
          <div className='nav-topics'>
            <div>exercise</div>
            <div>nutrition</div>
            <div>activity</div>
            <div>sleep</div>
          </div>
          <span className='signup-button'>sign up</span>
        </div>
      </div>
      <div className="greeting-container">
        <h1>The best personal training,<br /> right at your own home</h1>
        <div>Join ifit coach</div>
      </div>
      <div className="slidebar-container">
        <div className='arrow-buttons' style={{marginLeft: '10px'}} >{arrowLeft}</div>
        <div className="slidebar-card">
          <img src={gearjunkie} alt='gearjunkie'/>
          <p>"You focus on putting in the work, and the technology handles the rest."</p>
        </div>
        <div className="slidebar-card">
          <img src={wired} alt='wired'/>
          <p>"Literally transports you from home to wherever you choose to run."</p>
        </div>
        <div className="slidebar-card">
          <img src={mashable} alt='mashable' />
          <p>"Breathes new life into a tired, old running routine."</p>
        </div>
        <div className='arrow-buttons' style={{marginRight: '10px'}} >{arrowRight}</div>
      </div>
      <div className="gallery-container">
        <div className="gallery-card">
          <div>image</div>
          <div>
            Lake Inniscarra, Ireland-<br /> 
            Pyramid
          </div>
          <div>
            <span>stopwatch icon</span>
            <span>30:53</span>
            <span>distance icon</span>
            <span>6,248 M</span>
          </div>
          <div>VIEW DETAILS</div>
        </div>
        <div className="gallery-card">
          <div>image with playlist on top</div>
          <div>Performance Series</div>
        </div>
        <div className="gallery-card">
          <div>image</div>
          <div>Slow Pulls and Fast Intervals</div>
          <div>
            <span>stopwatch icon</span>
            <span>44:13</span>
            <span>distance icon</span>
            <span>9,948 M</span>
          </div>
        </div>
        <div className="gallery-card">
          <div>image with playlist</div>
          <div>20 Minutes to Toned</div>
        </div>
        <div className="gallery-card">
          <div>image</div>
          <div>Charles Race, Boston,<br /> Massachusetts</div>
          <div>
            <span>stopwatch icon</span>
            <span>36:22</span>
            <span>distance icon</span>
            <span>8,648 M</span>
          </div>
        </div>
        <div className="gallery-card">
          <div>image with playlist</div>
          <div>Full-Body HIIT Series</div>
        </div>
        <div className="gallery-card">
          <div>image</div>
          <div>Kafue River, Zambia—Power <br /> Stroke Pyramid</div>
          <div>
            <span>stopwatch icon</span>
            <span>36:22</span>
            <span>distance icon</span>
            <span>8,648 M</span>
          </div>
        </div>
        <div className="gallery-card">
          <div>image with playlist</div>
          <div>Shred &amp; Burn Series</div>
        </div>
      </div>
      <div className='equipment-container' >
        <div>Interested in our exciting iFit-enabled equipment?</div>
        <div className="equipment-card-container">
          <div className="equipment-card">
            <div>image</div>
            <div>Treadmills</div>
          </div>
          <div className="equipment-card">
            <div>image</div>
            <div>Bikes</div>
          </div>
          <div className="equipment-card">
            <div>image</div>
            <div>Ellipticals</div>
          </div>
          <div className="equipment-card">
            <div>image</div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
