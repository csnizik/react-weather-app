import { Form, FormGroup, Input, Row, Col, Label, Button, Container } from 'reactstrap';

const WeatherForm: React.FC = () => {
  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                placeholder="Enter a city"
                type="text"
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
