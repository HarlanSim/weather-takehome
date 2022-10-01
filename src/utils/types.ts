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
  current: DayData;
  daily: DayData[];
};

export type DayData = {
  temp: number;
  weather: DayWeatherData[];
};

export type DayWeatherData = {
  main: string;
  icon: string;
};
