import React, { Component } from 'react';
import { CityData, WeatherData } from '../utils/types';
import getWeather from '../utils/weatherAPI';
import { getIcon } from '../utils/icon';

interface WeatherContainerProps {
  city: CityData;
}

interface WeatherContainerState {
  weatherData: WeatherData[];
}

class WeatherContainer extends Component<
  WeatherContainerProps,
  WeatherContainerState
> {
  initialWeatherData: WeatherData[] = Array(5).fill({
    day: '',
    icon: '',
    temp: null,
  });
  state = { weatherData: this.initialWeatherData };

  async componentDidMount() {
    // fetch weather for each city
    this.callWeatherApi();
  }

  async componentDidUpdate(prevProps: Readonly<WeatherContainerProps>) {
    const {
      city: { lat, lon },
    } = this.props;
    if (prevProps.city.lat !== lat || prevProps.city.lon !== lon) {
      this.callWeatherApi();
    }
  }

  async callWeatherApi() {
    const { city } = this.props;
    const weatherData: WeatherData[] = await getWeather(city);
    this.setState({ weatherData: weatherData });
  }

  render() {
    let [today, ...otherDays] = this.state.weatherData;
    const forecast = otherDays.map((day) => {
      return (
        <div className='forecast-day'>
          {day.day} {getIcon(day.icon)}{' '}
          <span className='forecast-temp'>{day.temp + '°'}</span>
        </div>
      );
    });

    return (
      <div className='weather-box'>
        <div className='today-row'>
          <div className='today-header'>{today.day}</div>
          <div className='today-content'>
            {getIcon(today.icon, true)}
            <div className='today-info'>
              <div className='today-temp'>{today.temp + '°'}</div>
              <div className='today-description'>{today.description}</div>
            </div>
          </div>
        </div>
        <div className='forecast-row'>{...forecast}</div>
      </div>
    );
  }
}

export default WeatherContainer;
