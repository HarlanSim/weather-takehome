import React, { Component } from 'react';

interface CityHeaderProps {
  name: string;
  isSelected: boolean;
  selectCity: Function;
}

class CityHeader extends Component<CityHeaderProps> {
  render() {
    const { name, isSelected, selectCity } = this.props;
    return (
      <div
        className={isSelected ? 'active' : 'inactive'}
        onClick={() => selectCity()}
      >
        {name}
      </div>
    );
  }
}

export default CityHeader;
