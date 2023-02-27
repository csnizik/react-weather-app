export const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
export const API_BASE_URL = 'https://api.openweathermap.org';
export const UNITS = 'imperial';
export const GEO_URL = `${API_BASE_URL}/geo/1.0/direct?appid=${API_KEY}`;
export const WEATHER_URL = `${API_BASE_URL}/data/2.5/weather?appid=${API_KEY}&units=${UNITS}`;
