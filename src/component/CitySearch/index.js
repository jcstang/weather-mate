import React from 'react';
import './index.css'

const CitySearch = () => {
  return (
    <div className="container city-search">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" placeholder="City Name" />
        </div>
        <div className="control">
          <a className="button is-info" href="/">
            <i className="fas fa-location-arrow"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CitySearch;

