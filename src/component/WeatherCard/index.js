import React from 'react';
import './index.css';

export default function WeatherCard(props) {
  return (

    <section className="container column">
      <div className="card">
        <div className="card-content">
            <figure className="image is-128x128">
              <img src={props.weatherData.imageFileName} alt="weather icon"/>
            </figure>
          <div className="card-content">
            <p>{props.weatherData.day}</p>
            <p className="title is-4">{props.weatherData.currTemp}&deg;</p>
          </div>
        </div>
      </div>
    </section>
  );
}