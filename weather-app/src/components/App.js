import React from "react";
import "../styles/App.css";
import LocationDetails from "./LocationDetails";

function App({ location }) {
  console.log('location:', location);

  const { city, country } = location;
  return <LocationDetails city={city} country={country} />;
}

export default App;
