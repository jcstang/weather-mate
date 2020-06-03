import React from 'react';
import './index.css';

export default function WeatherCard(props) {
  return (

    <section className="container column">
      <div class="card">
        <div class="card-content">
            <figure class="image is-128x128">
              <img src={props.weatherData.imageFileName} alt="weather icon"/>
            </figure>
          <div class="card-content">
            <p>{props.weatherData.day}</p>
            <p class="title is-4">{props.weatherData.currTemp}&deg;</p>
          </div>
        </div>
      </div>
    </section>
  );
}