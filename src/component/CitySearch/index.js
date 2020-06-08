import React, { useState } from 'react';
import './index.css';




const cl = (text) => {
  return console.log(text);
};

const CitySearch = () => {
  const [cityInput, setCityInput] = useState('');
  
  const onSubmitHandler = (event) => {
    event.preventDefault();
    cl(`ready to search for ${cityInput}`);
  };

  const onChangeHandler = (event) => {
    const userInputSearchString = event.target.value;
    setCityInput(userInputSearchString);
  };

  return (
    <div className="container city-search">
      <div className="field has-addons" >
        <div className="control">
          <input 
            className="input" 
            type="text" 
            placeholder="City Name" 
            onChange={onChangeHandler}
          />
        </div>
        <div className="control" onClick={onSubmitHandler}>
          <a className="button is-info" href="/">
            <i className="fas fa-location-arrow"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CitySearch;

