import React, { Component } from 'react';
import CityHeader from './cityHeader';
import WeatherContainer from './weatherContainer';
import { CITIES } from '../utils/constants';
import '../styles/home.less';

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
      <>
        <CityHeader
          selectedCityIndex={selectedCityIndex}
          selectCity={(index) => this.selectCity(index)}
        />
        <WeatherContainer city={CITIES[selectedCityIndex]} />
      </>
    );
  }
}

export default Home;
