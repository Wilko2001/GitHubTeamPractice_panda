import React from "react";
import "../styles/ForecastSummaries.css";

function ForecastDetails({ forecast }) {
  const { date, temperature, humidity, wind } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__temperature">
        <strong className="forecast-details__label"> Max Temperature: </strong>
        <strong className="forecast-details__temperature-max">
          {temperature.max}&deg;C{"  "}
        </strong>

        <strong className="forecast-details__label"> Min Temperature: </strong>
        <strong className="forecast-details__temperature-min">
          {temperature.min}&deg;C
        </strong>
      </div>
      <div className="forecast-details_humidity">
        <strong className="forecast-details__label"> Humidity: </strong>
        <strong className="forecast-details__humidity"> {humidity} % </strong>
      </div>
      <div className="forecast-details__wind">
        <strong className="forecast-details__label"> Wind: </strong>
        <strong className="forecast-details__wind-direction">
          {wind.direction}
        </strong>
        <strong className="forecast-details__wind-speed">
          {" "}
          {wind.speed} mph{" "}
        </strong>
      </div>
    </div>
  );
}

export default ForecastDetails;
