import React from "react";
import './RatingCircle.css';


const Circle = ({rate}) => {
    const percent = {rate};
    return (
        <div>
            <svg width='40px' height='40px' >
                <circle
                    stroke={percent.rate < 33 ? '#fc0303' : percent.rate < 66 ? '#eeeb29' : '#60ff35'}
                    r='18px' cx='20px' cy='20px' strokeDashoffset={314 - (percent.rate * 114) / 100 + 'px'}/>
            </svg>
        </div>
    )
}

export default Circle;