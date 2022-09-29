import React, { Component } from "react";

type WeatherData = {
  icon: string;
  temp: number;
  day: string;
};

interface TopNavProps {
  cities: string[];
}

interface TopNavState {
  selectedCityIndex: number;
}

class TopNav extends Component<TopNavProps, TopNavState> {
  state: TopNavState = {
    selectedCityIndex: 0,
  };

  componentDidMount() {
    // fetch weather for each city
  }
  render() {
    return <div></div>;
  }
}

export default TopNav;
