export default class WeatherAPI {
  static weatherURL = 'https://api.openweathermap.org/data/3.0';

  static async getForecast(lat, lon) {
    return fetch(
      `${this.weatherURL}/onecall?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_APP_ID}`
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
