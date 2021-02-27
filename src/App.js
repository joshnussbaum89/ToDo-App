import React, { Component } from 'react';

// API Key
import apiKey from './config'

// Components
import Header from './components/Header';

class App extends Component {
  state = {
    weather: '',
    weatherDesc: '',
    loading: true
  }

  componentDidMount() {
    this.fetchWeather(`https://api.openweathermap.org/data/2.5/weather?q=Madison&appid=${apiKey}`)
      .then(this.setState({
        loading: true
      }))
      .catch(error => console.log('Uh Oh!', error))
  }

  fetchWeather = async (string) => {
    const response = await fetch(string);
    const weatherResponse = await response.json();

    // Set weather icon to the current weather
    const icon = `http://openweathermap.org/img/wn/${weatherResponse.weather[0].icon}@2x.png`
    const description = weatherResponse.weather[0].description;
    await this.setState({
      weather: icon,
      weatherDesc: description,
      loading: false
    });

    return weatherResponse;
  }

  render() {
    return (
      <div className="App" >
        {this.state.loading
          ? <h1 className='loading'>Loading...</h1>
          : <Header
            weatherIcon={this.state.weather}
            weatherDesc={this.state.weatherDesc}
          />}
      </div>
    );
  }
}

export default App;
