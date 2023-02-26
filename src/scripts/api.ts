import axios from 'axios';
import type { GeoData } from '../types/WeatherTypes';
import * as Constants from '../constants';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export function getWeather({ cityToSearch, setWeatherData, setIsLoading }: any) {
  console.log(cityToSearch, typeof setWeatherData, typeof setIsLoading);
  axios
    .get<GeoData[]>(`${Constants.GEO_URL}?q=${cityToSearch}&appid=${API_KEY}`)
    .then((response) => {
      const { lat, lon } = response.data[0];
      axios
        .get(
          `${Constants.WEATHER_URL}?lat=${lat}&lon=${lon}&units=${Constants.UNITS}&appid=${API_KEY}`
        )
        .then((response) => {
          setWeatherData(response.data);
          setIsLoading(false);
          // todo on first pass hard code URLs here. "We will go back and put all of our constants into a constants file."
        });
    });
}
