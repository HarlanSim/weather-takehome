import React, { PureComponent } from 'react';

interface DayBoxProps {
  loading: boolean;
  spinner: JSX.Element;
  icon: JSX.Element;
  title: string;
  temp: string;
}

class DayBox extends PureComponent<DayBoxProps> {
  render() {
    let { loading, spinner, icon, title, temp } = this.props;

    return loading ? (
      <div className='forecast-day loading'>{spinner}</div>
    ) : (
      <div className='forecast-day'>
        <div className='forecast-header'>{title}</div>
        {icon}
        <span className='forecast-temp'>{temp}</span>
      </div>
    );
  }
}

export default DayBox;
