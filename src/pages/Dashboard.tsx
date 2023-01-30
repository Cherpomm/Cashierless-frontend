import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import HomeNavbar from "../components/Navbar";
import "./Login.scss";

const Dashboard: React.FC = () => {
  return (
    <div className="">
      <HomeNavbar />
      <Container>
        <Row>
          <Col lg={7} className="p-4">
            <h2>Good to see you!</h2>
            <p className="mb-0">Click the button to see</p>
            <p className="mt-0">What we have for you today</p>
            <Button variant="primary" className="text-white">
              Product
            </Button>
            <Card>
              <Card.Body>
                <Row>
                  <Col xs={8}>
                    <h3>Balance</h3>
                    <h1>{2200.0}</h1>
                    <small>Your account number is 123-456-789</small>
                  </Col>
                  <Col xs={4}>
                    <ul>
                      <Button variant="primary" className="text-white w-100">
                        Scan
                      </Button>
                    </ul>
                    <ul>
                      <Button variant="primary" className="text-white w-100">
                        Top Up
                      </Button>
                    </ul>
                    <ul>
                      <Button variant="primary" className="text-white w-100">
                        Transaction
                      </Button>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={5}>
            <Card>
              <Card.Body>
                <h4 className="text-center">My Profile</h4>
                <div className="border">This is the motherfucking pic</div>
                <h5 className="text-center">Supakit Lokaew</h5>
                <p className="text-center">Customer</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
