import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import WeatherContainer from './component/WeatherContainer/index';
import mockWeather from './data/mockWeatherData';
import CitySearch from './component/CitySearch';
import axios from 'axios';



function App() {

  const [citySearchString, setCitySearchString] = useState('Chicago');
  const apiKey = 'a41553bf7961d05765a23fa436102cf6';

  const submitHandler = (event) => {
    event.preventDefault();
    const queryString = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchString}&appid=${apiKey}&units=imperial`;
    console.log(`ready to search for ${citySearchString}`);
    console.log(queryString);

    // let requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
    
    // fetch("api.openweathermap.org/data/2.5/weather?q=roy&appid=a41553bf7961d05765a23fa436102cf6", requestOptions)
    //   .then(response => response.json())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

    // axios.get(queryString)
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    fetch(queryString)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.main.temp);
        console.log(data.coord);
      });

    // fetch(queryString)
    //   .then((weatherResults) => {
    //     console.log(weatherResults.body);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // fetch(queryString)
    //   .then(response => response.json())
    //   .then(data => console.log(data));
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
      <CitySearch 
        onChangeHandler={onChangeHelper}
        onSubmitHandler={submitHandler}
      />
      <WeatherContainer data={mockWeather.data}/>
    </div>
  );
}

export default App;
