import React, { Component } from "react";

type WeatherData = {
  icon: string;
  temp: number;
  day: string;
};

interface WeatherBoxProps {
  weatherData: WeatherData[];
}

interface WeatherBoxState {
  today: WeatherData;
  day1: WeatherData;
  day2: WeatherData;
  day3: WeatherData;
  day4: WeatherData;
}

class WeatherBox extends Component<WeatherBoxProps, WeatherBoxState> {
  state: WeatherBoxState = {
    today: this.props.weatherData[0],
    day1: this.props.weatherData[1],
    day2: this.props.weatherData[2],
    day3: this.props.weatherData[3],
    day4: this.props.weatherData[4],
  };

  componentDidMount() {
    // fetch weather for each city
  }
  render() {
    const { today, day1, day2, day3, day4 } = this.state;
    return (
      <div>
        <div>
          Today:
          {today.icon} {today.temp}
        </div>
        <div>
          {day1.day}:{day1.icon} {day1.temp}
        </div>
        <div>
          {day2.day}:{day2.icon} {day2.temp}
        </div>
        <div>
          {day3.day}:{day3.icon} {day3.temp}
        </div>
        <div>
          {day4.day}:{day4.icon} {day4.temp}
        </div>
      </div>
    );
  }
}

export default WeatherBox;
