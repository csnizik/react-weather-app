import { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import { Container, Col, Row } from 'reactstrap';
import Header from './components/Header';
import './App.css';
import type { GeoData, WeatherData } from './types/WeatherTypes';
import Result from './components/Result';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const geoUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  const API_KEY = 'b386596393d82a307e75c0bfd7d0eb5b'; //todo add the .env after you have spun up the environment so it doesn't add the environment variable and the GET request fails, then explain
  // todo don't include the parameter "imperial" on the Weather request, so that the temperature displays in kelvin, then explain

  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

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

  return (
    <Container>
      <Header />
      <Row className="my-4">
        <Col md={3} className="px-4">
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            city={city}
          />
        </Col>
        <Col className="px-4">
          {isLoading && <LoadingSpinner />}
          {weatherData && <Result weatherData={weatherData} />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
