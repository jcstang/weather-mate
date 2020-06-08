import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import WeatherContainer from './component/WeatherContainer/index';
import mockWeather from './data/mockWeatherData';
import CitySearch from './component/CitySearch';
import axios from 'axios';



function App() {

  const [citySearchString, setCitySearchString] = useState('Chicago');
  const [latitude, setLatitude] = useState('33.441792');
  const [longitude, setLongitude] = useState('-94.037689');
  const [weatherData, setWeatherData] = useState([]);
  const apiKey = 'a41553bf7961d05765a23fa436102cf6';

  // const getForecastString = `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely&appid=${apiKey}`;
  // const queryString = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchString}&appid=${apiKey}&units=imperial`;

  const getLatAndLonFromString = async () => {
    let queryStr = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchString}&appid=${apiKey}&units=imperial`;
    let response = await fetch(queryStr);
    let data = await response.json();
    // await setLatitude(data.coord.lat);
    // await setLongitude(data.coord.lon);
    return data.coord;
  };

  const getForecastFromCoordinates = async (coordinates) => {
    const latitude = coordinates.lat;
    const longitude = coordinates.lon;

    const getForecastString = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${apiKey}`;
    let response = await fetch(getForecastString);
    let data = await response.json();
    return data;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(`ready to search for ${citySearchString}`);
    // console.log(queryString);
    setWeatherData(
      getForecastFromCoordinates(
        getLatAndLonFromString()
      )
    );

  }


  const onChangeHelper = (event) => {
    const userInputSearchString = event.target.value;
    setCitySearchString(userInputSearchString);
  }

  return (
    <div className="App">
      <nav className="navbar App-nav" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item app-name" href="https://bulma.io">
            Weather Mate
          </a>
        </div>
      </nav>
      <h1>{weatherData}</h1>
      <CitySearch 
        onChangeHandler={onChangeHelper}
        onSubmitHandler={submitHandler}
      />
      <WeatherContainer data={mockWeather.data}/>
    </div>
  );
}

export default App;
