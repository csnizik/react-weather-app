import axios from 'axios';
import type { GeoData } from '../types/WeatherTypes';
import * as Constants from '../constants';

export interface Props {
  cityToSearch: string;
  setWeatherData: Function;
  setIsLoading: Function;
}

export function getWeather({
  cityToSearch,
  setWeatherData,
  setIsLoading,
}: Props) {
  axios
    .get<GeoData[]>(`${Constants.GEO_URL}&q=${cityToSearch}`)
    .then((response) => {
      const { lat, lon } = response.data[0];
      axios
        .get(`${Constants.WEATHER_URL}&lat=${lat}&lon=${lon}`)
        .then((response) => {
          setWeatherData(response.data);
          setIsLoading(false);
        });
    });
}
