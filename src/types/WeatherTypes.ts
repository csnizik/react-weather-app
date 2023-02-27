export interface GeoData {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
}
export interface WeatherData {
  coord: Coord;
  weather: WeatherEntity[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
export interface Coord {
  lon: number;
  lat: number;
}
export interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}
export interface Clouds {
  all: number;
}
export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}
export interface ResultProps {
  weatherData: WeatherData;
  units: 'metric' | 'imperial';
}

export interface WindValueProps {
  deg?: number;
  speed?: number;
  units: 'metric' | 'imperial';
}
