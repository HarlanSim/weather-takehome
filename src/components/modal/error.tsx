import React, { PureComponent } from 'react';
import { ERROR_MESSAGE } from '../../utils/constants';

export default class ErrorMessage extends PureComponent {
  render() {
    return <div className='error'>{ERROR_MESSAGE}</div>;
  }
}
