import { DAYS, FORECAST_LENGTH } from './constants';
import { WeatherData, CityData, WeatherResponse } from './types';

export default async function getWeather(cityData: CityData) {
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
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
};

const parseWeatherData = (data: WeatherResponse): WeatherData[] => {
  let result = [];
  let { current, daily, timezone } = data;
  if (data && current && daily) {
    result.push({
      icon: current.weather[0]?.icon ?? '',
      temp: current.temp ? Math.round(current.temp - 273.15) : 0,
      day: 'Today',
    });
    for (let index = 0; index < FORECAST_LENGTH; index++) {
      const day = daily[index];
      result.push({
        icon: day?.weather[0]?.icon,
        temp: day?.temp ? Math.round(day?.temp?.day - 273.15) : 0,
        day: getDayFromTimeZone(timezone, index + 1),
      });
    }
  }
  return result;
};

const getDayFromTimeZone = (timezone: string, increment: number): string => {
  // Convert current datetime into the given timezone
  const dateString: string = new Date().toLocaleString('en-US', {
    timeZone: timezone,
  });
  // Get the day index, then mod it by 7 to get day from DAYS
  const dayIndex: number = new Date(dateString).getDay() + increment;
  return DAYS[dayIndex % 7];
};
