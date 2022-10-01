import React, { Component } from 'react';
import { CITIES } from '../utils/constants';
import CityHeader from './cityHeader';

interface TopNavProps {
  selectCity: Function;
  selectedCityIndex: number;
}

class TopNav extends Component<TopNavProps> {
  generateCityHeaders() {
    const { selectedCityIndex, selectCity } = this.props;

    return CITIES.map((city, index) => {
      return (
        <CityHeader
          name={city.name}
          isSelected={selectedCityIndex === index}
          selectCity={selectCity}
        />
      );
    });
  }
  render() {
    const Headers = this.generateCityHeaders();
    return <div className='topNav'>{...Headers}</div>;
  }
}

export default TopNav;
