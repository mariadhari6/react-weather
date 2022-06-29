import { Container, Grid } from "@mui/material";
import React from "react";
import Switch from "./Switch";
const AppBar = () => {
    return (
        <Container maxWidth="md" sx={{ marginTop: '1rem' }}>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="text"
                        placeholder="Search for city ..."
                    />
                    <i className="fa-solid fa-location-dot" style={{ fontSize: '1.2rem', marginLeft: '1rem' }}></i>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p style={{ fontSize: '1.2rem' }}>Rabu 29 Juni 2022</p>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Switch />
                </Grid>
            </Grid>
        </Container>
    )
}
export default AppBar;