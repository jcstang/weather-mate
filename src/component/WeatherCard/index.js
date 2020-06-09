import React from 'react';
import './index.css';

export default function WeatherCard(props) {
  return (

    <section className="container column">
      <div className="card main-card">
        <div className="card-content">
            <figure className="image is-128x128">
              <img src={props.weatherData.imageFileName} alt="weather icon"/>
            </figure>
          <div className="card-content">
            <p>{props.weatherData.day}</p>
            <p className="title is-3">{props.weatherData.currTemp}&deg;</p>
            <p className="is-3">High <strong>{props.weatherData.highTemp}</strong>&deg;</p>
            <p className="is-3">Low <strong>{props.weatherData.lowTemp}</strong>&deg;</p>
          </div>
        </div>
      </div>
    </section>
  );
}