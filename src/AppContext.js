import React, { createContext, useState } from "react";
const AppContext = () => {
    const WeatherContext = createContext()
    const TemperatureContext = createContext()
    const WeatherProvider = (props) => {
        const [weather, setWeather] = useState([])
        const handleChangeWeather = (nextWeather) => {
            setWeather(nextWeather)
        }
        return (
            <WeatherContext.Provider value={{ weather, handleChangeWeather }}>
                {props.children}
            </WeatherContext.Provider>
        )
    }
    const TemperatureProvider = (props) => {
        const [temperature, setTemperature] = useState({})
        const handleChangeTemperature = (nextTemp) => {
            setTemperature(nextTemp)
        }
        return (
            <TemperatureContext.Provider value={{ temperature, handleChangeTemperature }}>
                {props.children}
            </TemperatureContext.Provider>
        )
    }
    return {
        WeatherContext,
        WeatherProvider,
        TemperatureContext,
        TemperatureProvider
    }
}
export default AppContext()