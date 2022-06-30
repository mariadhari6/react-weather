import { Container, Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { WEATHER_API_BASE_URL } from "../config";
import Switch from "./Switch";
import AppContext from "../AppContext";
const { WeatherContext, TemperatureContext } = AppContext
const AppBar = () => {
    const [search, setSearch] = useState('')
    const [unit, setUnit] = useState('metric');
    const { handleChangeWeather } = useContext(WeatherContext)
    const { handleChangeTemperature } = useContext(TemperatureContext)
    const handleSubmit = () => {
        fetch(WEATHER_API_BASE_URL + '&q=' + search + '&units=' + unit)
            .then(response => response.json())
            .then(data => {
                if (data.cod == 404) {
                    throw data
                }
                if (data?.weather) {
                    handleChangeWeather(data.weather);
                }
                if (data?.main) {
                    handleChangeTemperature(data.main)
                }
            })
            .catch(error => {
                console.log(error);
                handleChangeWeather([])
                handleChangeTemperature({})
            })
    }
    useEffect(() => {
        handleSubmit()
    }, [unit])
    return (
        <Container maxWidth="md" sx={{ marginTop: '1rem' }}>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }} component="form" onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit()
                }}>
                    <input
                        type="text"
                        placeholder="Search for city ..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <i className="fa-solid fa-location-dot" style={{ fontSize: '1.2rem', marginLeft: '1rem' }}></i>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Switch unit={unit} setUnit={setUnit} />
                </Grid>
            </Grid>
        </Container>
    )
}
export default AppBar;