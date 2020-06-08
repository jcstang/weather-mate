import React from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import WeatherContainer from './component/WeatherContainer/index';
import mockWeather from './data/mockWeatherData';
import CitySearch from './component/CitySearch';



function App() {
  return (
    <div className="App">
      <nav class="navbar App-nav" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item app-name" href="https://bulma.io">
            Weather Mate
          </a>
        </div>
      </nav>
      <CitySearch />
      <WeatherContainer data={mockWeather.data}/>
    </div>
  );
}

export default App;
