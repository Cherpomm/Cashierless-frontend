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
import "./Dashboard.scss";

const Dashboard: React.FC = () => {
  return (
    <div className="">
      <HomeNavbar />
      <Container>
        <Row className="d-flex flex-row justify-content-center">
          <Col lg={6} className="p-4">
            <div className="mb-4">
              <h2>Good to see you!</h2>
              <p className="mb-0">Click the button to see</p>
              <p className="mt-0">What we have for you today</p>
              <Button variant="primary" className="text-white">
                Product
              </Button>
            </div>
            
            <Card>
              <Card.Body>
                <Row>
                  <Col xs={8} className="d-flex flex-column justify-content-between py-2">
                    <h3>Balance</h3>
                    <h1>$ 2200.00</h1>
                    <small>Your account number is 123-456-789</small>
                  </Col>
                  <Col xs={4}>
                    <Button variant="primary" className="text-white w-100 card-button">
                      Scan
                    </Button>
                    <Button variant="primary" className="text-white w-100 card-button">
                      Top Up
                    </Button>
                    <Button variant="primary" className="text-white w-100 card-button">
                      Transaction
                    </Button>
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
