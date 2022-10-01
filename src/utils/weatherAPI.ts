import { WeatherData, CityData } from './types';

export const parseWeatherData = (data: Object): WeatherData[] => {
  const weatherDataArr = [];
  return [{ icon: '', temp: 0, day: '' }];
};

export const fetchWeatherData = (appId: string, lat: number, lon: number) => {
  return fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${appId}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
};

export const getWeather = (cityData: CityData) => {
  const appId = process.env.OPENWEATHER_APP_ID || '';
  const rawWeatherData = fetchWeatherData(appId, cityData.lat, cityData.lon);
  return parseWeatherData(rawWeatherData);
};
