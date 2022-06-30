import React, { useState } from "react";
const useWeather = () => {
    const [state, setState] = useState({ id: '', main: '', description: '', icon: '' })
    const handleChangeWeather = (weather) => {
        setState(weather)
    }
    return [
        state,
        handleChangeWeather
    ]
}
export default useWeather