import { useEffect, useState } from 'react';
import axios from 'axios';
import type { GeoData, WeatherData } from '../types/WeatherTypes';
import { Container  } from 'reactstrap';

function Form(): JSX.Element {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    console.log(weatherData);
  });

  const geoUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  const API_KEY = 'b386596393d82a307e75c0bfd7d0eb5b'; //todo add the .env after you have spun up the environment so it doesn't add the environment variable and the GET request fails, then explain
  // todo don't include the parameter "imperial" on the Weather request, so that the temperature displays in kelvin, then explain

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    axios
      .get<GeoData[]>(`${geoUrl}?q=${city}&appid=${API_KEY}`)
      .then((response) => {
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
    <Container className="m-4">
      <form onSubmit={handleSubmit}>
        <label>
          Enter a city:
          <input type="text" value={city} onChange={handleChange} />
        </label>
        <button type="submit">Search</button>
        {weatherData && (
          <div>
            <h2>Weather for {weatherData.name}:</h2>
            <p>
              <img
                src={`../images/icons/${weatherData.weather[0].icon}.png`}
                alt="icon"
              />
              {weatherData.weather[0].description}
            </p>
            <dl>
              <dt>Temperature</dt>
              <dd>{weatherData.main.temp}</dd>
              <dt>Feels like</dt>
              <dd>{weatherData.main.feels_like}</dd>
              <dt>High</dt>
              <dd>{weatherData.main.temp_max}</dd>
              <dt>Low</dt>
              <dd>{weatherData.main.temp_min}</dd>
            </dl>
          </div>
        )}
      </form>
    </Container>
  );
}

export default Form;
