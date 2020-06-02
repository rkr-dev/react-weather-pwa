import React from "react";
import styles from './WeatherCard.module.css'

export const WeatherCard = ({
  data,
  data: { coord, weather, main, wind, rain, clouds, sys, name },
}) => {

const icon = name && weather[0].icon;
const url = name && `http://openweathermap.org/img/wn/${icon}@2x.png`
  return name ? (
    <div className={styles.WeatherCard}>
      <h1>{name}</h1>
      <p>{sys.country}</p>
      <p>{main.temp}° C</p>
      <img src={url} alt={weather[0].description} className={styles.icon}/>
      <p>Feels like {main.feels_like}° C</p>
      <p>{weather[0].description}</p>
    </div>
  ) : null;
};


