import React, { Component } from 'react';
import { CityData, WeatherData, WeatherResponse } from '../../utils/interfaces';
import { parseWeatherData } from '../../utils/helpers';
import WeatherAPI from '../../api/weatherApi';
import { getIcon } from '../icon';
import ErrorMessage from './error';
import Spinner from './spinner';
import DayBox from './dayBox';
import DayBoxList from './dayBoxList';

interface WeatherModalProps {
  city: CityData;
}

interface WeatherModalState {
  weatherData: WeatherData[];
  loading: boolean;
  error: boolean;
  weatherAPI: WeatherAPI;
}

class WeatherModal extends Component<WeatherModalProps, WeatherModalState> {
  initialWeatherData: WeatherData[] = Array(5).fill({
    day: '',
    icon: '',
    temp: null,
    description: '',
  });

  state = {
    weatherData: this.initialWeatherData,
    weatherAPI: null,
    loading: true,
    error: false,
  };

  async componentDidMount() {
    const weatherApi = new WeatherAPI(process.env.OPENWEATHER_APP_ID);
    this.getWeatherData(weatherApi);
    this.setState({ weatherAPI: weatherApi });
  }

  async componentDidUpdate(prevProps: Readonly<WeatherModalProps>) {
    const {
      city: { lat, lon },
    } = this.props;
    const { weatherAPI } = this.state;
    if (prevProps.city.lat !== lat || prevProps.city.lon !== lon) {
      this.getWeatherData(weatherAPI);
    }
  }

  async getWeatherData(weatherApi): Promise<void> {
    const { lat, lon } = this.props.city;
    try {
      const data: WeatherResponse = await weatherApi.getForecast(lat, lon);
      const weatherData: WeatherData[] = parseWeatherData(data);
      this.setState({
        weatherData: weatherData,
        weatherAPI: weatherApi,
        loading: false,
        error: false,
      });
    } catch (error) {
      console.log(error);
      this.setState({
        error: true,
        loading: false,
      });
    }
  }

  render() {
    let {
      loading,
      error,
      weatherData: [today, ...otherDays],
    } = this.state;

    return (
      <div className={loading ? 'weather-box loading' : 'weather-box'}>
        {error ? (
          <ErrorMessage />
        ) : loading ? (
          <Spinner />
        ) : (
          <>
            <DayBox
              title={today.day}
              icon={getIcon(today.icon, true)}
              temp={today.temp + '°'}
              description={today.description}
              isToday
            />
            <DayBoxList days={otherDays} />
          </>
        )}
      </div>
    );
  }
}

export default WeatherModal;
