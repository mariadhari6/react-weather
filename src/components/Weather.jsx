import { Box, Container } from "@mui/material";
import React from "react";
import { WiHumidity } from "react-icons/wi"
const Weather = () => {
    return (
        <Container maxWidth="md" sx={{marginTop: '2rem'}}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', alignItems: 'center' }}>
                <img src="https://openweathermap.org/img/wn/10d@4x.png" alt="" />
                <h1 style={{ fontSize: '2.625rem' }}>31°</h1>
            </div>
            <Box>
                <p style={{ fontSize: '1.2rem' }}>Cirebon, <span>Overcast Cloud</span></p>
                <div style={{ display: 'flex', fontSize: '1.2rem', alignItems: 'center', marginTop: '1rem' }}>
                    <p>70</p>
                    <WiHumidity style={{ fontSize: '1.5rem' }} />
                    <p>Humidity</p>
                </div>
            </Box>
        </Container>
    )
}
export default Weather