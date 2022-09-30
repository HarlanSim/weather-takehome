import React, { Component } from "react";
import CITIES from "../constants/cities";
import CityHeader from "./cityHeader";

interface TopNavProps {
  selectCity: Function;
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

  onCityClick(e) {
    const index = 1;
    this.props.selectCity(index);
    this.setState({ selectedCityIndex: index });
  }
  generateCityHeaders() {
    const { selectedCityIndex } = this.state;

    return CITIES.map((city, index) => {
      return (
        <CityHeader /> //name={city.name} isSelected={selectedCityIndex === index} />
      );
    });
  }
  render() {
    const headers = this.generateCityHeaders();
    return <div className="topNav">{headers}</div>;
  }
}

export default TopNav;
