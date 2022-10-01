export type WeatherData = {
  icon: string;
  temp: number;
  day: string;
};

export type CityData = {
  name: string;
  lat: number;
  lon: number;
};

export type WeatherResponse = {
  timezone: string;
  current: TodayData;
  daily: DayData[];
};

type TodayData = {
  temp: number;
  weather: DayWeatherData[];
};

type DayData = {
  temp: TempData;
  weather: DayWeatherData[];
};

type TempData = {
  day: number;
};

type DayWeatherData = {
  main: string;
  icon: string;
};
