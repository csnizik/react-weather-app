import { useState } from 'react';
import axios from 'axios';

interface IWeatherData {
  name: string;
  lat: number;
  lon: number;
  [key: string]: any;
}

const geoUrl = 'http://api.openweathermap.org/geo/1.0/direct';

function Form(): JSX.Element {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<IWeatherData[] | null>(null);
  const API_KEY = 'b386596393d82a307e75c0bfd7d0eb5b';

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    axios.get(`${geoUrl}?q=${city}&appid=${API_KEY}`).then((response) => {
      const { lat, lon } = response.data[0];
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      axios.get(weatherUrl).then((response) => {
        setWeatherData(response.data);
      });
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter a city:
        <input type="text" value={city} onChange={handleChange} />
      </label>
      <button type="submit">Search</button>
      {weatherData && (
        <div>
          <h2>Weather for {city}:</h2>
          
         
        </div>
      )}
    </form>
  );
}

export default Form;
