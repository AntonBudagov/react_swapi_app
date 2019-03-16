import React from 'react';

import './error-indicator.css';
// import icon from './death-star.png';
import icon2 from './death-star-2.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img src={icon2} alt="error icon"/>
      <span className="boom">BOOM!</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already sent droids to fix it)
      </span>
    </div>
  );
};

export default ErrorIndicator;
