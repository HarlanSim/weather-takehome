import React, { Component } from "react";
import TopNav from "../components/topNav";
import WeatherBox from "../components/weatherBox";
import { WeatherData } from "../components/types";

class Home extends Component {
  mockWeatherData: WeatherData[] = [
    { icon: "cloudy", temp: 19, day: "Monday" },
    { icon: "sunny", temp: 24, day: "Tuesday" },
    { icon: "thunder", temp: 15, day: "Wednesday" },
    { icon: "clear", temp: 22, day: "Thursday" },
    { icon: "partially cloudy", temp: 20, day: "Friday" },
  ];
  state = {
    weatherData: this.mockWeatherData,
    selectedCityIndex: 0,
  };
  componentDidMount() {
    // fetch weather for each city
    // const weatherData: WeatherData[] = [
    //   { icon: "cloudy", temp: 19 },
    //   { icon: "sunny", temp: 24 },
    //   { icon: "thunder", temp: 15 },
    //   { icon: "clear", temp: 22 },
    //   { icon: "partially cloudy", temp: 20 },
    // ];
    //this.setState({ weatherData: weatherData });
  }
  selectCity(index) {
    this.setState({
      selectedCityIndex: index,
    });
  }
  render() {
    return (
      <>
        <TopNav selectCity={this.selectCity} />
        <WeatherBox weatherData={this.state.weatherData} />
      </>
    );
  }
}

export default Home;
