import React, { Component } from 'react';
import CityHeader from './header/cityHeader';
import WeatherModal from './modal/WeatherModal';
import { CITIES } from '../utils/constants';

interface HomeState {
  selectedCityIndex: number;
}

class Home extends Component {
  state: HomeState = {
    selectedCityIndex: 0,
  };

  selectCity(index: number) {
    this.setState({
      selectedCityIndex: index,
    });
  }
  render() {
    const { selectedCityIndex } = this.state;
    return (
      <div className='home-container'>
        <CityHeader
          selectedCityIndex={selectedCityIndex}
          selectCity={(index) => this.selectCity(index)}
        />
        <WeatherModal city={CITIES[selectedCityIndex]} />
      </div>
    );
  }
}

export default Home;
