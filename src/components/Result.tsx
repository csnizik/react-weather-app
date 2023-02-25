import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  Col,
  Container,
  Row,
} from 'reactstrap';
import type { WeatherData } from '../types/WeatherTypes';

export interface Props {
  weatherData: WeatherData;
}

const Result = ({ weatherData }: Props) => {
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
              <dd>{weatherData.main.temp}</dd>
              <dt>Feels like</dt>
              <dd>{weatherData.main.feels_like}</dd>
              <dt>High</dt>
              <dd>{weatherData.main.temp_max}</dd>
              <dt>Low</dt>
              <dd>{weatherData.main.temp_min}</dd>
              <dt>Wind</dt>
              <dd className="result-wind">
                {weatherData.wind.deg && (
                  <img
                    src="../images/icons/down-arrow.png"
                    style={{ transform: `rotate(${weatherData.wind.deg}deg)` }}
                    alt="Wind direction"
                  />
                )}
                {weatherData.wind.speed} mph
              </dd>
            </dl>
          </CardText>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Result;
