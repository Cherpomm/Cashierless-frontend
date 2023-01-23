import { Button, Col, Container, Row } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <Row className="py-3 px-4 align-items-center">
      <Col md>
        <h1 className="fw-bold display-5">
          Hello!! <br /> Want To Experience <br /> Contact-Less Store?
        </h1>
      </Col>
      <Col md>
        <h5 className="mb-3">
          Wanna buy stuff but don’t have an account?
          <br />
          Register is the option.
        </h5>
        <Button variant="primary">Register</Button>
      </Col>
    </Row>
  );
};

export default Home;
