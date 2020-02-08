import React, { Component } from 'react';
import CardList from "./CardList";
import SearchBox from './SearchBox';
import Scroll from './Scroll';
//import {weather} from "./weather";  //now App.js has weather data, need connect it to component. Store in this.state

class App extends Component{
    constructor(){
        super();
        this.state = {  /* stores want you want (i.e searchbox text, card list) */
            myweatherinfo: [],     //myweatherinfo is the key, weather is the info from weather.js
            searchValue: ''
        }
    }

    //to call data from other servers not on your computer
    componentDidMount(){
        fetch("https://api.data.gov.sg/v1/environment/air-temperature")
            .then(response => { return response.json() })
            .then(weather => {
                //will have actual real-time data
                const updatedWeather = [];
                for (let i = 0; i < weather.metadata.stations.length; i++) {
                    updatedWeather.push({ ...weather.metadata.stations[i], ...weather.items[0].readings[i] })
                }
                //add data back to state
                this.setState({ myweatherinfo: updatedWeather})
            })    
    }

    onSearchChange = (e) => {
        //console.log(event.target.value);
        this.setState({ searchValue: e.target.value }) //helper function to change values in stored data
    }

    render(){
        let filteredWeather = this.state.myweatherinfo.filter(eachWeatherInfo => eachWeatherInfo.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
        return (
            <div className="tc">
                <h1>Weather App</h1>
                <SearchBox onSearchChange={this.onSearchChange}/> {/* this. refers to this App.js function called this.onSearchChange */}
                <Scroll>
                    <CardList weatherinfo = {filteredWeather} />   {/*this is how we pass down info to CardList */}
                </Scroll>
                
            </div>
        )
    }

}

export default App;