import React, { Component } from 'react';
import { CityData, WeatherData } from '../../utils/types';
import getWeather from '../../api/fetch';
import { getIcon } from '../../utils/icon';
import DayBox from './dayBox';
import { ERROR_MESSAGE } from '../../utils/constants';

interface WeatherModalProps {
  city: CityData;
}

interface WeatherModalState {
  weatherData: WeatherData[];
  loading: boolean;
  error: boolean;
}

class WeatherModal extends Component<WeatherModalProps, WeatherModalState> {
  initialWeatherData: WeatherData[] = Array(5).fill({
    day: '',
    icon: '',
    temp: null,
  });
  state = { weatherData: this.initialWeatherData, loading: true, error: false };

  async componentDidMount() {
    // fetch weather for each city
    this.callWeatherApi().catch(() => {
      this.setState({
        error: true,
        loading: false,
      });
    });
  }

  async componentDidUpdate(prevProps: Readonly<WeatherModalProps>) {
    const {
      city: { lat, lon },
    } = this.props;
    if (prevProps.city.lat !== lat || prevProps.city.lon !== lon) {
      this.setState({
        loading: true,
      });
      this.callWeatherApi().catch(() => {
        this.setState({
          error: true,
          loading: false,
        });
      });
    }
  }

  async callWeatherApi() {
    const { city } = this.props;
    const weatherData: WeatherData[] = await getWeather(city);
    this.setState({ weatherData: weatherData, loading: false });
  }

  loadingSpinner = (): JSX.Element => {
    return getIcon('loading', true);
  };

  error = (): JSX.Element => {
    return <div className='error'>{ERROR_MESSAGE}</div>;
  };

  render() {
    let {
      loading,
      error,
      weatherData: [today, ...otherDays],
    } = this.state;
    const Error = this.error();
    const Spinner = this.loadingSpinner();
    const Forecast = otherDays.map((day) => {
      return (
        <DayBox
          icon={getIcon(day.icon)}
          title={day.day}
          temp={day.temp + '°'}
          isToday={false}
          description={''}
        />
      );
    });

    return (
      <div className={loading ? 'weather-box loading' : 'weather-box'}>
        {error ? (
          Error
        ) : loading ? (
          Spinner
        ) : (
          <>
            <DayBox
              title={today.day}
              icon={getIcon(today.icon, true)}
              temp={today.temp + '°'}
              description={today.description}
              isToday
            />
            <div className='forecast-row'>{...Forecast}</div>
          </>
        )}
      </div>
    );
  }
}

export default WeatherModal;
