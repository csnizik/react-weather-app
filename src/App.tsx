import { useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import { Container, Col, Row } from 'reactstrap';
import Header from './components/Header';
import './App.css';
import type { GeoData, WeatherData } from './types/WeatherTypes';
import Result from './components/Result';
import LoadingSpinner from './components/LoadingSpinner';
import { getWeather } from './scripts/api';
import * as Constants from './constants';

function App() {
  const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY; //todo add the .env after you have spun up the environment so it doesn't add the environment variable and the GET request fails, then explain
  // todo don't include the parameter "imperial" on the Weather request, so that the temperature displays in kelvin, then explain

  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const cityToSearch = city;
    setCity(''); //todo leave this off at first. when you search a new city the old one will still be there, ugly
    getWeather({ cityToSearch, setWeatherData, setIsLoading });
  };

  return (
    <Container>
      <Header city={weatherData?.name ? weatherData.name : 'your town'} />
      {/* todo when adding this in, leave off the ? after weatherData. Observe the TS error. This gives us an opportunity to see another use for the ? in JS; this was a feature that was added in EcmaScript 2020 called Optional Chaining. It allows us to create a chain where each segment is evaluated. If is truthy, then the next segment is evaluated. If any segment of the chain is falsy, then the segments to the right are not evaluated since they obviously can't exist. This prevents us from getting an error on a nonexistent property. Other languages such as Ruby have already had this abiblity so it's nice to see JS keeping up. */}
      <Row className="my-4">
        <Col md={4} className="px-4">
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            city={city}
          />
        </Col>
        <Col className="px-4">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            weatherData && (
              <Result weatherData={weatherData} units={Constants.UNITS} />
            )
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
