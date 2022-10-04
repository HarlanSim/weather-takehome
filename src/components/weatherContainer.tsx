import React, { Component } from 'react';
import { CityData, WeatherData } from '../utils/types';
import getWeather from '../utils/weatherAPI';
import { getIcon } from '../utils/icon';
import DayBox from './dayBox';
import TodayBox from './todayBox';

interface WeatherContainerProps {
  city: CityData;
}

interface WeatherContainerState {
  weatherData: WeatherData[];
  loading: boolean;
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
  state = { weatherData: this.initialWeatherData, loading: true };

  async componentDidMount() {
    // fetch weather for each city
    this.callWeatherApi();
  }

  async componentDidUpdate(prevProps: Readonly<WeatherContainerProps>) {
    const {
      city: { lat, lon },
    } = this.props;
    if (prevProps.city.lat !== lat || prevProps.city.lon !== lon) {
      // Decided against loading between cities as it's a bit too jarring
      // this.setState({
      //   loading: true,
      // });
      this.callWeatherApi();
    }
  }

  async callWeatherApi() {
    const { city } = this.props;
    const weatherData: WeatherData[] = await getWeather(city);
    this.setState({ weatherData: weatherData, loading: false });
  }

  loadingSpinner = (isLarge: boolean = false): JSX.Element => {
    return getIcon('loading', isLarge);
  };

  render() {
    let {
      loading,
      weatherData: [today, ...otherDays],
    } = this.state;
    const BigSpinner = this.loadingSpinner(true);
    const SmallSpinner = this.loadingSpinner();
    const Forecast = otherDays.map((day) => {
      return (
        <DayBox
          spinner={SmallSpinner}
          loading={loading}
          icon={getIcon(day.icon)}
          title={day.day}
          temp={day.temp + '°'}
        />
      );
    });

    return (
      <div className='weather-box'>
        <div className='today-row'>
          <TodayBox
            title={today.day}
            icon={getIcon(today.icon, true)}
            loading={loading}
            temp={today.temp + '°'}
            description={today.description}
            spinner={BigSpinner}
          />
        </div>
        <div className='forecast-row'>{...Forecast}</div>
      </div>
    );
  }
}

export default WeatherContainer;
