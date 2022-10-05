export default class WeatherAPI {
  appId: string;
  constructor(appId: string) {
    this.appId = appId;
  }

  weatherURL = 'https://api.openweathermap.org/data/3.0';

  async getForecast(lat, lon) {
    return fetch(
      `${this.weatherURL}/onecall?lat=${lat}&lon=${lon}&appid=${this.appId}`
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
  }
}
