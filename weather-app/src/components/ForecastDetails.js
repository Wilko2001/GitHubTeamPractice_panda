import React from "react";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__temperature">
        <span className="forecast-details__label"> Max Temperature: </span>
        <span className="forecast-details__temperature-max">
          {temperature.max}&deg;C{"  "}
        </span>

        <span className="forecast-details__label"> Min Temperature: </span>
        <span className="forecast-details__temperature-min">
          {temperature.min}&deg;C
        </span>
      </div>
      <div className="forecast-details_humidity">
        <span className="forecast-details__label"> Humidity: </span>
        <span className="forecast-details__humidity"> {humidity} % </span>
      </div>
      <div className="forecast-details__wind">
        <span className="forecast-details__label"> Wind: </span>
        <span className="forecast-details__wind-direction">
          {wind.direction}
        </span>
        <span className="forecast-details__wind-speed"> {wind.speed} mph </span>
      </div>
    </div>
  );
}

export default ForecastDetails;
