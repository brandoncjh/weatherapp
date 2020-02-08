import React from 'react';
import cloud from './assets/cloud.png'
import sun from './assets/sunny.png'

//const Card that takes in properties
const Card = (props) => {
    return (
        /* tc - text aligned
        bg-light-green: light green background
         */
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            {/*conditional in JSX (if temperature below 28 degrees, i want to show cloud, else displya sun)*/}
            {props.value < 28 
                ? <img src={cloud} height="200" width="200" alt="Cloud Pic"/>
                : <img src={sun} height="200" width="200" alt="Sun Pic"/>}
            <div>
                {/* specify name and values in the card*/}
                <h3>{props.name}</h3>
                <p>{props.value}°</p>
            </div>
        </div>
    )
}

export default Card;