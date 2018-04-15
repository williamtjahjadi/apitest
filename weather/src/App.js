import React, { Component } from 'react';
import axios from 'axios'

import './App.css';

const api = 'http://api.apixu.com/v1/current.json?key=43f8707df20544bd94030453181504&q=Jakarta'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      weather: {}
    }
  }

  componentDidMount() {
    axios.get(api)
    .then(weather => {
      console.log(weather.data);
      this.setState({
        weather: weather.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        {(Object.keys(this.state.weather).length > 0)
          ? <div>
            <h2>{this.state.weather.location.name}</h2>
            <h2>{this.state.weather.location.region}</h2>
            <h2>{this.state.weather.location.country}</h2>
            <h2>{this.state.weather.location.lat}</h2>

            <h2>{this.state.weather.current.cloud}</h2>
            <h2>{this.state.weather.current.feelslike_c}</h2>
            </div>
          : <p>Loading</p>  
        }
      </div>
    );
  }
}

export default App;