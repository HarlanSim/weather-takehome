import React, { PureComponent } from 'react';

interface TodayBoxProps {
  loading: boolean;
  spinner: JSX.Element;
  icon: JSX.Element;
  title: string;
  temp: string;
  description: string;
}

class TodayBox extends PureComponent<TodayBoxProps> {
  render() {
    let { loading, spinner, icon, title, temp, description } = this.props;

    return loading ? (
      <>{spinner}</>
    ) : (
      <>
        <div className='today-header'>{title}</div>
        <div className='today-content'>
          {icon}
          <div className='today-info'>
            <div className='today-temp'>{temp}</div>
            <div className='today-description'>{description}</div>
          </div>
        </div>
      </>
    );
  }
}

export default TodayBox;
