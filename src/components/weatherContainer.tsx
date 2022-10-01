import React, { Component } from 'react';

type WeatherData = {
  icon: string;
  temp: number;
  day: string;
};

interface WeatherContainerProps {
  weatherData: WeatherData[];
}

class WeatherContainer extends Component<WeatherContainerProps> {
  render() {
    const [today, ...otherDays] = this.props.weatherData;
    otherDays.map((day) => {
      return (
        <div>
          {day.day} {day.icon} {day.temp}
        </div>
      );
    });
    return (
      <div>
        <div>
          Today:
          {today.icon} {today.temp}
        </div>
        {<div></div>}
      </div>
    );
  }
}

export default WeatherContainer;
