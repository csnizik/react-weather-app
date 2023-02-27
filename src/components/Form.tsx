import {  ChangeEventHandler, FormEventHandler } from 'react';
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
