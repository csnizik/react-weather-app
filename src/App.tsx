import { useState } from 'react';
import Form from './components/Form';
import { Container, Col, Row } from 'reactstrap';
import Header from './components/Header';
import './App.css';
import type { WeatherData } from './types/WeatherTypes';
import Result from './components/Result';
import LoadingSpinner from './components/LoadingSpinner';
import { getWeather } from './scripts/api';
import * as Constants from './constants';

function App() {

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
