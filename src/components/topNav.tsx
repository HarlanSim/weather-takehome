import React, { Component } from "react";

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
