import React from 'react';
import './index.css'

const CitySearch = () => {
  return (
    <div className="container city-search">
      <div class="field has-addons">
        <div class="control">
          <input class="input" type="text" placeholder="City Name" />
        </div>
        <div class="control">
          <a class="button is-info" href="/">
            <i class="fas fa-location-arrow"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CitySearch;

