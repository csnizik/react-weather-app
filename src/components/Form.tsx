import { useState, ChangeEventHandler, FormEventHandler } from 'react';
import axios from 'axios';
import type { GeoData, WeatherData } from '../types/WeatherTypes';
import {
  Form,
  FormGroup,
  Input,
  Row,
  Col,
  Label,
  Button,
  Container,
} from 'reactstrap';

export interface Props {
  handleChange: ChangeEventHandler;
  handleSubmit: FormEventHandler;
  city: string;
}

const WeatherForm = ({handleChange, handleSubmit, city}: Props) => {
  // const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const geoUrl = 'http://api.openweathermap.org/geo/1.0/direct';
  const API_KEY = 'b386596393d82a307e75c0bfd7d0eb5b'; //todo add the .env after you have spun up the environment so it doesn't add the environment variable and the GET request fails, then explain
  // todo don't include the parameter "imperial" on the Weather request, so that the temperature displays in kelvin, then explain

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setCity(event.target.value);
  // };

  return (
    <Container className="my-4">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <FormGroup>
              <Label className="visually-hidden" htmlFor="city">Enter a city:</Label>
              <Input
                type="text"
                value={city}
                onChange={handleChange}
                id="city"
                name="city"
                placeholder="Enter a city"
              />
            </FormGroup>
            <Button>Search</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default WeatherForm;
