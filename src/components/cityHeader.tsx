import React, { Component } from 'react';

interface CityHeaderProps {
  name: string;
  index: number;
  selectedCityIndex: number;
  selectCity: Function;
}

class CityHeader extends Component<CityHeaderProps> {
  render() {
    const { name, index, selectedCityIndex, selectCity } = this.props;
    return (
      <div
        className={selectedCityIndex === index ? 'active' : 'inactive'}
        onClick={() => {
          selectCity(index);
        }}
      >
        {name}
      </div>
    );
  }
}

export default CityHeader;
