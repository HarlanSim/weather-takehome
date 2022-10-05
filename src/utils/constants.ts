import { CityData } from './interfaces';

export const CITIES: CityData[] = [
  { name: 'Hanoi', lat: 21.0278, lon: 105.8342 },
  { name: 'Paris', lat: 48.8566, lon: 2.3522 },
  { name: 'Vancouver', lat: 49.2827, lon: -123.1207 },
];

export const DAYS: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const ERROR_MESSAGE: string =
  'An unexpected error has occurred, please try again later.';

export const FORECAST_LENGTH = 4;
