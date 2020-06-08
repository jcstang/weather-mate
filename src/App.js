import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import WeatherContainer from './component/WeatherContainer/index';
import mockWeather from './data/mockWeatherData';
import CitySearch from './component/CitySearch';


const sampleWeatherData = [
  {
    "dt": 1591639200,
    "sunrise": 1591614367,
    "sunset": 1591665887,
    "temp": {
      "day": 82.4,
      "min": 71.96,
      "max": 82.4,
      "night": 71.96,
      "eve": 75.15,
      "morn": 82.4
    },
    "feels_like": {
      "day": 81.97,
      "night": 74.53,
      "eve": 75.43,
      "morn": 81.97
    },
    "pressure": 1002,
    "humidity": 74,
    "dew_point": 73.27,
    "wind_speed": 17.38,
    "wind_deg": 350,
    "weather": [
      {
        "id": 502,
        "main": "Rain",
        "description": "heavy intensity rain",
        "icon": "10d"
      }
    ],
    "clouds": 90,
    "rain": 41.32,
    "uvi": 12.41
  },
  {
    "dt": 1591725600,
    "sunrise": 1591700762,
    "sunset": 1591752315,
    "temp": {
      "day": 90.14,
      "min": 63.86,
      "max": 90.14,
      "night": 63.86,
      "eve": 77,
      "morn": 74.75
    },
    "feels_like": {
      "day": 91.45,
      "night": 60.35,
      "eve": 75,
      "morn": 76.84
    },
    "pressure": 1004,
    "humidity": 63,
    "dew_point": 76.14,
    "wind_speed": 16.91,
    "wind_deg": 226,
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": 0,
    "uvi": 11.41
  },
  {
    "dt": 1591812000,
    "sunrise": 1591787159,
    "sunset": 1591838741,
    "temp": {
      "day": 78.71,
      "min": 60.55,
      "max": 82.4,
      "night": 62.56,
      "eve": 77.32,
      "morn": 60.55
    },
    "feels_like": {
      "day": 74.52,
      "night": 61.27,
      "eve": 78.33,
      "morn": 54.93
    },
    "pressure": 1018,
    "humidity": 45,
    "dew_point": 55.94,
    "wind_speed": 10.51,
    "wind_deg": 294,
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": 0,
    "uvi": 11.23
  },
  {
    "dt": 1591898400,
    "sunrise": 1591873557,
    "sunset": 1591925166,
    "temp": {
      "day": 81.64,
      "min": 61.02,
      "max": 84.42,
      "night": 66.7,
      "eve": 80.98,
      "morn": 61.02
    },
    "feels_like": {
      "day": 83.14,
      "night": 66.22,
      "eve": 85.33,
      "morn": 61
    },
    "pressure": 1023,
    "humidity": 49,
    "dew_point": 60.98,
    "wind_speed": 3.58,
    "wind_deg": 77,
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": 0,
    "uvi": 10.16
  },
  {
    "dt": 1591984800,
    "sunrise": 1591959957,
    "sunset": 1592011590,
    "temp": {
      "day": 87.37,
      "min": 64.36,
      "max": 88.81,
      "night": 70.14,
      "eve": 83.26,
      "morn": 64.36
    },
    "feels_like": {
      "day": 89.89,
      "night": 72.59,
      "eve": 87.89,
      "morn": 66.94
    },
    "pressure": 1021,
    "humidity": 44,
    "dew_point": 62.82,
    "wind_speed": 3.24,
    "wind_deg": 232,
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "clouds": 31,
    "rain": 0.36,
    "uvi": 10.18
  },
  {
    "dt": 1592071200,
    "sunrise": 1592046358,
    "sunset": 1592098013,
    "temp": {
      "day": 83.16,
      "min": 68.4,
      "max": 85.44,
      "night": 69.24,
      "eve": 80.46,
      "morn": 68.4
    },
    "feels_like": {
      "day": 87.46,
      "night": 71.17,
      "eve": 85.42,
      "morn": 72.32
    },
    "pressure": 1016,
    "humidity": 66,
    "dew_point": 70.66,
    "wind_speed": 6.46,
    "wind_deg": 29,
    "weather": [
      {
        "id": 500,
        "main": "Rain",
        "description": "light rain",
        "icon": "10d"
      }
    ],
    "clouds": 0,
    "rain": 2.54,
    "uvi": 10.37
  },
  {
    "dt": 1592157600,
    "sunrise": 1592132760,
    "sunset": 1592184434,
    "temp": {
      "day": 82.4,
      "min": 64.63,
      "max": 85.14,
      "night": 65.43,
      "eve": 81.16,
      "morn": 64.63
    },
    "feels_like": {
      "day": 83.55,
      "night": 64.81,
      "eve": 84.69,
      "morn": 64.24
    },
    "pressure": 1018,
    "humidity": 54,
    "dew_point": 64.54,
    "wind_speed": 6.62,
    "wind_deg": 76,
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": 0,
    "uvi": 10.85
  },
  {
    "dt": 1592244000,
    "sunrise": 1592219164,
    "sunset": 1592270854,
    "temp": {
      "day": 80.6,
      "min": 61.48,
      "max": 84.38,
      "night": 65.53,
      "eve": 82.22,
      "morn": 61.48
    },
    "feels_like": {
      "day": 82.35,
      "night": 64.02,
      "eve": 88.21,
      "morn": 61.09
    },
    "pressure": 1018,
    "humidity": 55,
    "dew_point": 63.03,
    "wind_speed": 4.74,
    "wind_deg": 88,
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "clouds": 0,
    "uvi": 10.82
  }
]


function App() {

  const [citySearchString, setCitySearchString] = useState('Chicago');
  // const [latitude, setLatitude] = useState('33.441792');
  // const [longitude, setLongitude] = useState('-94.037689');
  const [weatherData, setWeatherData] = useState([]);
  const apiKey = 'a41553bf7961d05765a23fa436102cf6';

  // const getForecastString = `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely&appid=${apiKey}`;
  // const queryString = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchString}&appid=${apiKey}&units=imperial`;

  // const getLatAndLonFromString = async () => {
  //   let queryStr = `https://api.openweathermap.org/data/2.5/weather?q=${citySearchString}&appid=${apiKey}&units=imperial`;
  //   let response = await fetch(queryStr);
  //   let data = await response.json();
  //   // await setLatitude(data.coord.lat);
  //   // await setLongitude(data.coord.lon);
  //   return data.coord;
  // };

  // const getForecastFromCoordinates = async (coordinates) => {
  //   const latitude = coordinates.lat;
  //   const longitude = coordinates.lon;

  //   const getForecastString = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${apiKey}`;
  //   let response = await fetch(getForecastString);
  //   let data = await response.json();
  //   return data;
  // };

  // const setSevenDayForecast = async () => {
  //   const getForecastString = `https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=minutely&appid=${apiKey}&units=imperial`;
  //   let response = await fetch(getForecastString);
  //   let data = await response.json();

  //   let weatherArray = [];
  //   console.log(data.daily);
  //   data.daily.forEach(element => {
  //     console.log(element);
  //     weatherArray.push(element);
  //   });
  // }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(`ready to search for ${citySearchString}`);
    // setSevenDayForecast();

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
