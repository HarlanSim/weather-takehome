import React, { PureComponent } from 'react';
import { getIcon } from '../icon';

export default class Spinner extends PureComponent {
  render() {
    return getIcon('loading', true);
  }
}
