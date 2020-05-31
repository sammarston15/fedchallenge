import React from 'react';
import './reset.css';
import './App.scss';
import logo from './media/ifit_logo.png';
import coach from './media/COACH.png';
import gearjunkie from './media/gear-junkie-logo.svg';
import wired from './media/wired-logo.svg';
import mashable from './media/mashable-logo.svg';
import ireland from './media/ireland.png';
import stopwatch from './media/stopwatch.png';
import paperclip from './media/paperclip.png';
import performanceSeries from './media/performanceSeries.png';
import slowPulls from './media/slowPulls.png';
import twentyminutes from './media/20minutes.png';
import boston from './media/boston.png';
import hitSeries from './media/hitSeries.png';
import zambia from './media/zambia.png';
import burnSeries from './media/burnSeries.png';
import treadmills from './media/treadmills.png';
import bikes from './media/bikeperson.png';
import elliptical from './media/elliptical.png';
import strength from './media/strength.png';
import youtube from './media/youtubeIcon.png';
import pinterest from './media/pinterestIcon.png';
import facebook from './media/facebookIcon.png';
import twitter from './media/twitterIcon.png';
import instagram from './media/instagramIcon.png';

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
            <img src={logo} alt="logo" style={{marginRight: '10px'}}/>
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
        <div className="gallery-card ">
          <img src={ireland} alt="ireland image"/>
          <div>
            Lake Inniscarra, Ireland—<br /> 
            Pyramid
          </div>
          <div>
            <img src={stopwatch} alt="stopwatch icon"/>
            <span>30:53</span>
            <img src={paperclip} alt="paperclip icon"/>
            <span>6,248 M</span>
          </div>
          <div className='view-details animate__animated animate__bounce' >VIEW DETAILS</div>
        </div>
        <div className="gallery-card">
          <img src={performanceSeries} alt="performance series image"/>
          <div>Performance Series</div>
        </div>
        <div className="gallery-card">
          <img src={slowPulls} alt="slow pulls image"/>
          <div>Slow Pulls and Fast Intervals</div>
          <div>
            <img src={stopwatch} alt="stopwatch icon"/>
            <span>44:13</span>
            <img src={paperclip} alt="paperclip icon"/>
            <span>9,948 M</span>
          </div>
        </div>
        <div className="gallery-card">
          <img src={twentyminutes} alt="20 minutes to toned image"/>
          <div>20 Minutes to Toned</div>
        </div>
        <div className="gallery-card">
          <img src={boston} alt="boston image"/>
          <div>Charles Race, Boston,<br /> Massachusetts</div>
          <div>
            <img src={stopwatch} alt="stopwatch icon"/>
            <span>36:22</span>
            <img src={paperclip} alt="paperclip icon"/>
            <span>8,648 M</span>
          </div>
        </div>
        <div className="gallery-card">
          <img src={hitSeries} alt="hit series image"/>
          <div>Full-Body HIIT Series</div>
        </div>
        <div className="gallery-card">
          <img src={zambia} alt="zambia image"/>
          <div>Kafue River, Zambia—Power <br /> Stroke Pyramid</div>
          <div>
            <img src={stopwatch} alt="stopwatch icon"/>
            <span>36:22</span>
            <img src={paperclip} alt="paperclip icon"/>
            <span>8,648 M</span>
          </div>
        </div>
        <div className="gallery-card">
          <img src={burnSeries} alt="burn series image"/>
          <div>Shred &amp; Burn Series</div>
        </div>
      </div>
      <div className='equipment-container' >
        <div className='equipment-title'>Interested in our exciting iFit-enabled equipment?</div>
        <div className="equipment-card-container">
          <div className="equipment-card">
            <img src={treadmills} alt="treadmills image"/>
            <div>Treadmills</div>
          </div>
          <div className="equipment-card">
            <img src={bikes} alt="bike image"/>
            <div>Bikes</div>
          </div>
          <div className="equipment-card">
            <img src={elliptical} alt="elliptical image"/>
            <div>Ellipticals</div>
          </div>
          <div className="equipment-card">
            <img src={strength} alt="pully image"/>
            <div>Strength</div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="quick-links-container">
          <div>
            <div className='quick-links-title'>Company</div>
            <div className='quick-links-info'>About</div>
            <div className='quick-links-info'>Contact Us</div>
            <div className='quick-links-info'>Careers</div>
          </div>
          <div>
            <div className='quick-links-title'>Account</div>
            <div className='quick-links-info'>Log in</div>
            <div className='quick-links-info'>Create Account</div>
          </div>
          <div>
            <div className='quick-links-title'>Support</div>
            <div className='quick-links-info'>Help Center</div>
            <div className='quick-links-info'>Accessibility</div>
          </div>
        </div>
        <div className="social-media-container">
          <div className="social-icon">
            <div className="create-border">
              <img src={youtube} alt="youtube icon"/>
            </div>
          </div>
          <div className="social-icon">
            <div className="create-border">
              <img src={pinterest} alt="pinterest icon"/>
            </div>
          </div>
          <div className="social-icon">
            <div className="create-border">
              <img src={facebook} alt="facebook icon"/>
            </div>
          </div>
          <div className="social-icon">
            <div className="create-border">
              <img src={twitter} alt="twitter icon"/>
            </div>
          </div>
          <div className="social-icon">
            <div className="create-border">
              <img src={instagram} alt="instagram icon"/>
            </div>
          </div>
        </div>
        <div className="rights-container">
          <div className="language">
            <label>
              <select>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>Mandarin</option>
                <option>Vietnamese</option>
              </select>
            </label>
          </div>
          <div className="rights">
            <div>&copy; iFit.com. All Rights Reserved.</div>
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default App;
