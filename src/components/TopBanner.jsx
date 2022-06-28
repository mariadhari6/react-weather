import React, { useEffect, useState } from "react";
import { WEATHER_API_BASE_URL } from "../config";
function TopBanner() {
    const [search, setSearch] = useState('');
    const [message, setMessage] = useState('')
    const fetchWeather = () => {
        fetch(WEATHER_API_BASE_URL + '&q=' + search)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => {
        console.log(process.env.APP_ID);
    }, [])
    const searchCity = (e) => {
        e.preventDefault();
        fetchWeather()
    }
    return (
        <section className="top-banner">
            <div className="container">
                <h1 className="heading">Simple Weaher App</h1>
                <form onSubmit={searchCity}>
                    <input type="text" placeholder="Search for a city" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button type="button" onClick={searchCity}>Submit</button>
                    <span className="msg"></span>
                </form>
            </div>
        </section>
    )
}
export default TopBanner;