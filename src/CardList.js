import React from 'react';
import Card from "./Card";
//import {weather} from "./weather";  //should move this data to App.js -> make it pass down info to CardList.js as a prop



const CardList = (props) => {
    //inside CardList, we take in cards, use map function to display it
    //currently using a fixed (fake) database in weather.js
    const cardsArray = props.weatherinfo.map((user, i) => {
        //now weather information is passed down from App.js as a prop, can call through props.weatherinfo[i]
        return <Card key={i} id={props.weatherinfo[i].id} name={props.weatherinfo[i].name} value={props.weatherinfo[i].value} />
    })
    return (
        <div>
            {cardsArray}
        </div>
    )
}

export default CardList;