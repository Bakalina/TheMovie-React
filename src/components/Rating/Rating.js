import React from 'react';
import './Rating.css'
import Circle from "./RatingCircle/RatingCircle";


const Rating = ({rate}) => {

    return (
        <div className='rateStyle'>
            <div className='circleBlock'>
                <Circle rate={rate}/>
                <div className='circleValue'>{rate}<sup style={{fontSize: '7px'}}>%</sup></div>
            </div>
        </div>
    )
}

export default Rating;
