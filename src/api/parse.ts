import { DAYS, FORECAST_LENGTH } from '../utils/constants';
import { WeatherData, WeatherResponse } from '../utils/types';

export const parseWeatherData = (data: WeatherResponse): WeatherData[] => {
  let result = [];
  let { current, daily, timezone } = data;
  if (data && current && daily) {
    result.push({
      icon: current.weather[0]?.icon ?? '',
      temp: current.temp ? Math.round(current.temp - 273.15) : 0,
      day: 'Today',
      description: current.weather[0]?.main,
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
