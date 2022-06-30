import React from "react";
const Switch = ({ setUnit }) => {
    return (
        <div className="button r" id="button">
            <input
                type="checkbox"
                className="checkbox"
                onChange={(e) => {
                    if (e.target.checked) {
                        setUnit('imperial')
                    }
                    else {
                        setUnit('metric')
                    }
                    
                }}
            />
            <div className="knobs"></div>
            <div className="layer"></div>
        </div>
    )
}
export default Switch