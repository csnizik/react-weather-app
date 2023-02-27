import { Button, Spinner, Container } from 'reactstrap';

const LoadingSpinner = () => {
  return (
    <Container className="m-4">

    <Button color="primary" disabled>
      <Spinner size="sm">Loading...</Spinner>
      <span>Loading</span>
    </Button>
    </Container>
  );
};

export default LoadingSpinner;
