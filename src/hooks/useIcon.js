import React, { useState } from "react";
import { defaultWeatherIcon } from "../config";
const useIcon = () => {
    const [icon, setIcon] = useState(defaultWeatherIcon);
    const handleChangeIcon = (code) => {
        setIcon(code)
    }
    return [
        icon,
        handleChangeIcon
    ]
}
export default useIcon;