import React from 'react';

export default () => {
  return(
    <div id="footer">
      <div id="footer-box">
        <div id="instagram-bg">
          <a href="https://www.instagram.com/devvy_cho/" target="_blank" rel="noopener noreferrer">
            <div className="footer-item" id="instagram"></div>
          </a>
        </div>
        <a href="https://twitter.com/DevvyCho" target="_blank" rel="noopener noreferrer">
          <div className="footer-item" id="twitter"></div>
        </a>        
        <a href="https://devleague.com" target="_blank" rel="noopener noreferrer">
          <div className="footer-item" id="devleague"></div>
        </a>
        <a href="https://github.com/nitharios/but-devvy-said" target="_blank" rel="noopener noreferrer">
          <div className="footer-item" id="github"></div>
        </a>
      </div>
    </div>
  )
};