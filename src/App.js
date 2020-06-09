import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import WeatherContainer from './component/WeatherContainer/index';
import mockWeather from './data/mockWeatherData';
import CitySearch from './component/CitySearch';
// import WeatherCard from './component/WeatherCard';


function App() {

  const iconId = '10d';
  const sampleIconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
  const [currentTemp, setCurrentTemp] = useState(69);
  
  const [citySearchString, setCitySearchString] = useState('Chicago');
  const apiKey = 'a41553bf7961d05765a23fa436102cf6';
  const queryString = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchString}&appid=${apiKey}&units=imperial`;

  const [weatherDataList, setWeatherDataList] = useState([
    {
      currTemp: 1,
      imageFileName: sampleIconUrl,
      day: "Sunday",
      highTemp: 90,
      lowTemp: 40
    }
  ]);

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
        try {
          // setCurrentTemp(data.main.temp);

          //copy data then mutate it
          const copyWeather = weatherDataList[0];
          copyWeather.currTemp = data.main.temp;
          
          // setWeatherDataList(weatherDataList => [...weatherDataList, copyWeather]);
        } catch(err) {
          console.log(err);
        }
      })
      .catch((error) => {
        console.log(error);
      });

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
      <WeatherContainer data={mockWeather.data} />
      <WeatherContainer data={weatherDataList} />
    </div>
  );
}

export default App;
