import React from "react";
import AppBar from "./components/AppBar";
import Weather from "./components/Weather";
import AppContext from "./AppContext";
const { WeatherProvider, TemperatureProvider } = AppContext
function App() {
  return (
    <React.Fragment>
      <WeatherProvider>
        <TemperatureProvider>
          <AppBar />
          <Weather />
        </TemperatureProvider>
      </WeatherProvider>
    </React.Fragment>
  );
}

export default App;
