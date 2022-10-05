import { WeatherData, CityData, WeatherResponse } from '../utils/types';
import { parseWeatherData } from './parse';

export default async function getWeather(
  cityData: CityData
): Promise<WeatherData[]> {
  const appId = process.env.OPENWEATHER_APP_ID || '';
  const rawWeatherData: WeatherResponse = await fetchWeatherData(
    appId,
    cityData.lat,
    cityData.lon
  );
  return parseWeatherData(rawWeatherData);
}

const fetchWeatherData = (
  appId: string,
  lat: number,
  lon: number
): Promise<WeatherResponse> => {
  return fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${appId}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Unable to access Weather API');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
};
