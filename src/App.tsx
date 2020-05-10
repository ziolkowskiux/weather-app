import React, { useState } from "react";
import "./styles.css";
import LocationsList from "./components/locationsList";
import LocationSearch from "./components/locationSearch";
import WeatherInfo from "./components/weatherInfo";

export default function App() {
  const [location, setLocation] = useState("");

  const handleSubmit = value => {
    setLocation(value);
  };

  const showWeatherInfo = value => {};

  return (
    <div className="App">
      <h2>Hello Weather</h2>
      <h4>Please type in desired location to receive weather forecast</h4>
      <LocationSearch onSubmit={handleSubmit} />
      <LocationsList location={location} onClick={""} />
      <WeatherInfo />
    </div>
  );
}
