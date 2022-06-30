import { Box, Container } from "@mui/material";
import React, { useContext } from "react";
import { WiHumidity } from "react-icons/wi"
import { defaultWeatherIcon } from "../config";
import useIcon from "../hooks/useIcon";
import AppContext from "../AppContext";
const { WeatherContext, TemperatureContext } = AppContext
const Weather = () => {
    const { weather } = useContext(WeatherContext)
    const { temperature } = useContext(TemperatureContext)
    return (
        <React.Fragment>
            {weather.length > 0 && (
                <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', alignItems: 'center' }}>
                        <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`} alt="" />
                        {temperature?.temp && (
                            <h1 style={{ fontSize: '2.625rem' }}>{temperature.temp}°</h1>
                        )}
                    </div>
                    <Box>
                        <p style={{ fontSize: '1.2rem', textTransform: 'capitalize' }}>{weather[0].description}</p>
                        {temperature?.humidity && (
                            <div style={{ display: 'flex', fontSize: '1.2rem', alignItems: 'center', marginTop: '1rem' }}>
                                <p>{temperature.humidity}</p>
                                <WiHumidity style={{ fontSize: '1.5rem' }} />
                                <p>Humidity</p>
                            </div>
                        )}
                    </Box>
                </Container>
            )}
        </React.Fragment>
    )
}
export default Weather