import * as Constants from '../constants';

export const tempUnits =
  Constants.UNITS === 'imperial'
    ? 'F'
    : Constants.UNITS === 'metric'
    ? 'C'
    : '';
export const windUnits =
  Constants.UNITS === 'imperial'
    ? 'mph'
    : Constants.UNITS === 'metric'
    ? 'km/h'
    : '';
