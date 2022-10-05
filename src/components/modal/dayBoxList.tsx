import React, { PureComponent } from 'react';
import DayBox from './dayBox';
import { getIcon } from '../icon';
import { WeatherData } from '../../utils/interfaces';

interface DayBoxListProps {
  days: WeatherData[];
}

export default class DayBoxList extends PureComponent<DayBoxListProps> {
  render() {
    const { days } = this.props;
    const dayList: JSX.Element[] = days.map((day) => {
      return (
        <DayBox
          icon={getIcon(day.icon)}
          title={day.day}
          temp={day.temp + '°'}
          isToday={false}
          description={''}
        />
      );
    });
    return <div className='day-list'>{...dayList}</div>;
  }
}
