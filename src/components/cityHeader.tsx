import React, { Component } from 'react';
import { CITIES } from '../utils/constants';
import CityOption from './cityOption';

interface CityHeaderProps {
  selectCity: Function;
  selectedCityIndex: number;
}

class CityHeader extends Component<CityHeaderProps> {
  generateCityOptions() {
    const { selectedCityIndex, selectCity } = this.props;

    return CITIES.map((city, index) => {
      return (
        <CityOption
          name={city.name}
          index={index}
          selectedCityIndex={selectedCityIndex}
          selectCity={selectCity}
        />
      );
    });
  }
  render() {
    const Options = this.generateCityOptions();
    return <div className='city-header'>{...Options}</div>;
  }
}

export default CityHeader;
