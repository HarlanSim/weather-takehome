interface WeatherData {
  icon: string;
  temp: number;
  day: string;
  description: string;
}

interface CityData {
  name: string;
  lat: number;
  lon: number;
}

interface WeatherResponse {
  timezone: string;
  current: TodayData;
  daily: DayData[];
}

interface TodayData {
  temp: number;
  weather: DayWeatherData[];
}

interface DayData {
  temp: TempData;
  weather: DayWeatherData[];
}

interface TempData {
  day: number;
}

interface DayWeatherData {
  main: string;
  icon: string;
}

export { WeatherData, CityData, WeatherResponse };
