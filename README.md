# weather-takehome

weather-takehome is a simple web application that displays the forecast for 3 given cities (Vancouver, Paris, Hanoi). It retrieves weather data from the [OpenWeather API One Call API 3.0](https://openweathermap.org/api) and displays it in a simple modal. You can view a deployed version of the project here: https://weather-takehome.herokuapp.com/

### How to run the project locally:

Before you can run the project, you must obtain an API key from [OpenWeather](https://openweathermap.org/api) and then add it to an .env file in your base directory like so: `OPENWEATHER_APP_ID=your API Key here`.
Then simply:

```
npm install
npm run build
npm run start
```

The web app will be available on: `http://localhost:1234`.
