import React from 'react';
import WeatherCard from '../WeatherCard';

export default function WeatherContainer(props) {
  return (
    <div className="container">
      <div className="columns is-centered is-full-mobile">
        {
          props.data.map((dayItem, index) => (
            <WeatherCard key={index} weatherData={dayItem} />
          ))
        }

      </div>
    </div>
  );
}