import * as Constants from '../constants';

export const tempUnits = Constants.UNITS === 'imperial' ? 'F' : 'C';
export const windUnits = Constants.UNITS === 'imperial' ? 'mph' : 'km/h';