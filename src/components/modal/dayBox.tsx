import React, { PureComponent } from 'react';

interface DayBoxProps {
  icon: JSX.Element;
  title: string;
  temp: string;
  description: string;
  isToday: boolean;
}

class DayBox extends PureComponent<DayBoxProps> {
  render() {
    let { icon, title, temp, description, isToday = false } = this.props;

    return (
      <div className={isToday ? 'today' : 'day'}>
        <div className='header'>{title}</div>
        {isToday ? (
          <div className='content'>
            {icon}
            <div className='info'>
              <div className='temp'>{temp}</div>
              <div className='description'>{description}</div>
            </div>
          </div>
        ) : (
          <>
            <div className='content'>{icon}</div>
            <div className='temp'>{temp}</div>
          </>
        )}
      </div>
    );
  }
}

export default DayBox;
