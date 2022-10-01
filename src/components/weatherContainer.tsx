import React, { Component } from 'react';
import { CityData, WeatherData } from '../utils/types';
import { getWeather } from '../utils/weatherAPI';

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
        <div>
          {day.day} {day.icon} {day.temp}
        </div>
      );
    });
    return (
      <div>
        <div>
          {today.day} {today.icon} {today.temp}
        </div>
        {...forecast}
      </div>
    );
  }
}

export default WeatherContainer;
