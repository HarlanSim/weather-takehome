import React, { Component } from 'react';
import TopNav from './topNav';
import WeatherContainer from './weatherContainer';
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
      <>
        <TopNav
          selectedCityIndex={selectedCityIndex}
          selectCity={(index) => this.selectCity(index)}
        />
        <WeatherContainer city={CITIES[selectedCityIndex]} />
      </>
    );
  }
}

export default Home;
