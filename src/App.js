import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import WeatherContainer from './component/WeatherContainer/index';
import mockWeather from './data/mockWeatherData';
import CitySearch from './component/CitySearch';
import WeatherCard from './component/WeatherCard';


function App() {

  const [citySearchString, setCitySearchString] = useState('Chicago');
  const [currentTemp, setCurrentTemp] = useState(69);
  const [dayData, setDayData] = useState({
    day: "Sunday",
    imageFileName: "./images/rain.svg",
    currTemp: currentTemp,
    highTemp: 90
  });

  const apiKey = 'a41553bf7961d05765a23fa436102cf6';
  // const queryString = 'api.openweathermap.org/data/2.5/weather?q' + citySearchString +'&appid=' + apiKey;
  const queryString = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchString}&appid=${apiKey}&units=imperial`;

  const convertDataToModel = (data) => {
    let returnArray = [];

    data.forEach(element => {
      returnArray.push(
        {
          day: '',
          imageFileName: '',
          currTemp: data.main.temp,
          highTemp: 0
        }
      );
    });

    return returnArray;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(`ready to search for ${citySearchString}`);

    fetch(queryString)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        // console.log(data.main.temp);
        // console.log(data.coord);
        // setWeatherData(convertDataToModel(data));
        setCurrentTemp(data.main.temp);
      })
      .catch((error) => {
        console.log(error);
      });

    // fetch(queryString)
    //   .then(response => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // fetch(queryString)
    // .then(response => response.json())
    // .then((data) => {
    //   console.log(data);
    //   // console.log(data.main.temp);
    //   // console.log(data.coord);
    // });

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
      <WeatherCard weatherData={dayData} />
    </div>
  );
}

export default App;
