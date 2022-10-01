import { DAYS } from './constants';
import { WeatherData, CityData, WeatherResponse } from './types';

const getDayFromTimeZone = (timezone: string, increment: number): string => {
  const dateString: string = new Date().toLocaleString('en-US', {
    timeZone: timezone,
  });
  const dayIndex: number = new Date(dateString).getDay() + increment;
  return DAYS[dayIndex % 7];
};

export const parseWeatherData = (data: WeatherResponse): WeatherData[] => {
  let result = [];
  let { current } = data;
  result.push({
    icon: current?.weather[0]?.icon ?? '',
    temp: data?.current?.temp ? data?.current?.temp - 273.15 : 0,
    day: 'Today',
  });
  data?.daily?.forEach((day, index) =>
    result.push({
      icon: day?.weather[0]?.icon,
      temp: day?.temp ? day?.temp - 273.15 : 0,
      day: getDayFromTimeZone(data.timezone, index + 1),
    })
  );
  return result;
};

export const fetchWeatherData = (
  appId: string,
  lat: number,
  lon: number
): Promise<WeatherResponse> => {
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

export async function getWeather(cityData: CityData) {
  const appId = process.env.OPENWEATHER_APP_ID || '';
  const rawWeatherData: WeatherResponse = await fetchWeatherData(
    appId,
    cityData.lat,
    cityData.lon
  );
  return parseWeatherData(rawWeatherData);
}
