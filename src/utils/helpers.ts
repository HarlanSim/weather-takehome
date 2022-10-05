import { DAYS, FORECAST_LENGTH } from './constants';
import { WeatherData, WeatherResponse } from './interfaces';

function getDayFromTimeZone(timezone: string, increment: number): string {
  // Convert current datetime into the given timezone
  const dateString: string = new Date().toLocaleString('en-US', {
    timeZone: timezone,
  });
  // Get the day index, then mod it by 7 to get the day of the week from DAYS object
  const dayIndex: number = new Date(dateString).getDay() + increment;
  return DAYS[dayIndex % 7];
}

function convertFromKelvinToCelsius(temp: number): number {
  return temp ? Math.round(temp - 273.15) : 0;
}

function parseWeatherData(data: WeatherResponse): WeatherData[] {
  let result: WeatherData[] = [];
  let { current, daily, timezone } = data;
  if (data && current && daily) {
    result.push({
      icon: current.weather[0]?.icon ?? '',
      temp: convertFromKelvinToCelsius(current.temp),
      day: 'Today',
      description: current.weather[0]?.main,
    });
    for (let index = 0; index < FORECAST_LENGTH; index++) {
      const day = daily[index];
      result.push({
        icon: (day?.weather.length && day.weather[0].icon) ?? '',
        temp: convertFromKelvinToCelsius(day?.temp?.day),
        day: getDayFromTimeZone(timezone, index + 1),
        description: '',
      });
    }
  }
  return result;
}

export { getDayFromTimeZone, convertFromKelvinToCelsius, parseWeatherData };
