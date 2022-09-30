import React, { Component } from "react";
import CITIES from "../constants/cities";

// interface TopNavProps {
//   selectCity: Function;
// }

// interface TopNavState {
//   selectedCityIndex: number;
// }

class CityHeader extends Component {
  // <TopNavProps, TopNavState> {
  //   state: TopNavState = {
  //     selectedCityIndex: 0,
  //   };

  componentDidMount() {
    // fetch weather for each city
  }

  onCityClick(e) {
    const index = 1;
    // this.props.selectCity(index);
    // this.setState({ selectedCityIndex: index });
  }
  generateCityHeaders() {
    // const { selectedCityIndex } = this.state;
    // const { selectCity } = this.props;

    return CITIES.map((city, index) => {
      return (
        <div />
        // <CityHeader
        //   name={city.name}
        //   isSelected={selectedCityIndex === index}
        //   onClick={() => selectCity(index)}
        // />
      );
    });
  }
  render() {
    const headers = this.generateCityHeaders();
    return <div className="topNav">{headers}</div>;
  }
}

export default CityHeader;
