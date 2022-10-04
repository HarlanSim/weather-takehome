import React, { Component } from 'react';

interface CityOptionProps {
  name: string;
  index: number;
  selectedCityIndex: number;
  selectCity: Function;
}

class CityOption extends Component<CityOptionProps> {
  render() {
    const { name, index, selectedCityIndex, selectCity } = this.props;
    // TODO: Conditionally add class better
    const className =
      'city-option' + (selectedCityIndex === index ? ' active' : '');
    return (
      <div
        className={className}
        onClick={() => {
          selectCity(index);
        }}
      >
        {name}
      </div>
    );
  }
}

export default CityOption;
