import React from 'react';
import WeatherCard from './WeatherCard';

export default function WeatherContainer(props) {
  return (
    <div className="container">
      <div className="columns is-centered is-full-mobile">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />

      </div>
    </div>
  );
}