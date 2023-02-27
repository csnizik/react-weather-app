import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  Container,
} from 'reactstrap';
import { tempUnits, windUnits } from '../utils/unitConversions'
import type { ResultProps } from '../types/WeatherTypes';


const Result = ({ weatherData }: ResultProps) => {
  return (
    <Container>
      <Card className="result-card px-3">
        <CardBody>
          <CardTitle tag="h5">{weatherData.name}</CardTitle>
          <hr />
          <CardSubtitle className="mb-2 text-muted result-city" tag="h6">
            {weatherData.weather[0].description}
            <img
              src={`../images/icons/${weatherData.weather[0].icon}.png`}
              alt={`${weatherData.weather[0].description} icon`}
              className="result-icon"
            />
          </CardSubtitle>
          <CardText>
            <dl>
              <dt>Temperature</dt>
              <dd>{Math.round(weatherData.main.temp)}°{tempUnits}</dd>
              <dt>Feels like</dt>
              <dd>{Math.round(weatherData.main.feels_like)}°{tempUnits}</dd>
              <dt>High</dt>
              <dd>{Math.round(weatherData.main.temp_max)}°{tempUnits}</dd>
              <dt>Low</dt>
              <dd> {Math.round(weatherData.main.temp_min)}°{tempUnits}</dd>
              <dt>Wind</dt>
              <dd className="result-wind">
                <img
                  src="../images/icons/down-arrow.png"
                  alt="Wind direction"
                />
                <span>{Math.round(weatherData.wind.speed)} {windUnits}</span>
              </dd>
            </dl>
          </CardText>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Result;
