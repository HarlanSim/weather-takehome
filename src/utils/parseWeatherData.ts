import { WeatherData } from "../components/types";

export const parseWeatherData = (data): WeatherData => {
  return { icon: "", temp: 0, day: "" };
};
