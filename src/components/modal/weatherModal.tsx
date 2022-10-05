import React, { Component } from 'react';
import { CityData, WeatherData, WeatherResponse } from '../../utils/interfaces';
import { parseWeatherData } from '../../utils/helpers';
import WeatherAPI from '../../api/weatherApi';
import { getIcon } from '../icon';
import DayBox from './dayBox';
import { ERROR_MESSAGE } from '../../utils/constants';

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
    const appId = process.env.OPENWEATHER_APP_ID || '';
    const weatherApi = new WeatherAPI(appId);
    this.getWeatherData(weatherApi);
    this.setState({ weatherAPI: weatherApi });
  }

  async componentDidUpdate(prevProps: Readonly<WeatherModalProps>) {
    const {
      city: { lat, lon },
    } = this.props;
    const { weatherAPI } = this.state;
    if (prevProps.city.lat !== lat || prevProps.city.lon !== lon) {
      this.setState({
        loading: true,
      });
      this.getWeatherData(weatherAPI);
    }
  }

  async getWeatherData(weatherApi): Promise<void> {
    const { lat, lon } = this.props.city;
    return weatherApi
      .getForecast(lat, lon)
      .then((data: WeatherResponse) => {
        const weatherData: WeatherData[] = parseWeatherData(data);
        this.setState({
          weatherData: weatherData,
          weatherAPI: weatherApi,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loading: false,
        });
      });
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
