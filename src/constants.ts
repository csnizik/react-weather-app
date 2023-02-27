import { WindValueProps } from './types/WeatherTypes'

export const API_KEY:any = process.env.REACT_APP_OPENWEATHER_API_KEY;
export const API_BASE_URL:string = 'https://api.openweathermap.org';
export const UNITS:WindValueProps["units"] = 'metric';
export const GEO_URL:string = `${API_BASE_URL}/geo/1.0/direct?appid=${API_KEY}`;
export const WEATHER_URL:string = `${API_BASE_URL}/data/2.5/weather?appid=${API_KEY}&units=${UNITS}`;
