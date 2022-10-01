import React, { Component } from 'react';
import TopNav from '../components/topNav';
import WeatherBox from '../components/weatherBox';
import { WeatherData } from '../utils/types';

class Home extends Component {
  mockWeatherData: WeatherData[] = [
    { icon: 'cloudy', temp: 19, day: 'Monday' },
    { icon: 'sunny', temp: 24, day: 'Tuesday' },
    { icon: 'thunder', temp: 15, day: 'Wednesday' },
    { icon: 'clear', temp: 22, day: 'Thursday' },
    { icon: 'partially cloudy', temp: 20, day: 'Friday' },
  ];
  state = {
    weatherData: this.mockWeatherData,
    selectedCityIndex: 0,
  };
  componentDidMount() {
    // fetch weather for each city
    //this.setState({ weatherData: weatherData });
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
        <WeatherBox weatherData={weatherData} />
      </>
    );
  }
}

export default Home;
