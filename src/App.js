import React from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import WeatherContainer from './component/WeatherContainer';


function App() {
  return (
    <div className="App">
      <nav class="navbar App-nav" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28" />
          </a>
        </div>
      </nav>
      <WeatherContainer />
    </div>
  );
}

export default App;
