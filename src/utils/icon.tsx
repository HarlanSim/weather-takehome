import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
  faCloudSun,
  faCloudMoon,
  faCloud,
  faCloudShowersWater,
  faCloudSunRain,
  faCloudMoonRain,
  faCloudBolt,
  faSnowflake,
  faWater,
  faSpinner,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

export const getIcon = (
  iconName: string,
  isLarge: boolean = false
): JSX.Element => {
  if (iconName) {
    const icon = iconLookup[iconName];
    return (
      <FontAwesomeIcon
        className={isLarge ? 'icon-large' : 'icon-small'}
        icon={icon}
      />
    );
  }
};

const iconLookup: { [key: string]: IconDefinition } = {
  // clear sky
  '01d': faSun,
  '01n': faMoon,

  // few clouds
  '02d': faCloudSun,
  '02n': faCloudMoon,

  // scattered cloud
  '03d': faCloud,
  '03n': faCloud,

  // broken clouds
  '04d': faCloud,
  '04n': faCloud,

  // shower rain
  '09d': faCloudShowersWater,
  '09n': faCloudShowersWater,

  // rain
  '10d': faCloudSunRain,
  '10n': faCloudMoonRain,

  // thunderstorm
  '11d': faCloudBolt,
  '11n': faCloudBolt,

  // snow
  '13d': faSnowflake,
  '13n': faSnowflake,

  // mist
  '50d': faWater,
  '50n': faWater,

  loading: faSpinner,
};
