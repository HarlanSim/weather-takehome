import React, { Component } from 'react';
import TopNav from '../components/topNav';
import WeatherContainer from '../components/weatherContainer';
import { CITIES } from '../utils/constants';
import { CityData, WeatherData } from '../utils/types';
import { getWeather } from '../utils/weatherAPI';

class Home extends Component {
  state = {
    weatherData: null,
    selectedCityIndex: 0,
  };

  async componentDidMount() {
    // fetch weather for each city
    const city: CityData = CITIES[this.state.selectedCityIndex];
    const weatherData: WeatherData[] = await getWeather(city);
    this.setState({ weatherData: weatherData });
  }

  selectCity(index) {
    this.setState({
      selectedCityIndex: index,
    });
  }
  render() {
    const { selectedCityIndex, weatherData } = this.state;
    return (
      <>
        <TopNav
          selectedCityIndex={selectedCityIndex}
          selectCity={this.selectCity}
        />
        <WeatherContainer weatherData={weatherData} />
      </>
    );
  }
}

export default Home;
