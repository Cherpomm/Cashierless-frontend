import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import CarouselWithItems from "../components/Carousel";
import HomeNavbar from "../components/Navbar";
import "./Dashboard.scss";
import {BsUpcScan, BsFillCreditCardFill, BsClockHistory} from "react-icons/bs";

const Dashboard: React.FC = () => {
  return (
    <div className="">
      <HomeNavbar />
      <Container>
        <Row className="d-flex flex-row justify-content-center">
          <Col lg={6} className="p-4">
            <div className="mb-4">
              <h1 className="fw-bold">Good to see you!</h1>
              <p className="mb-0">Click the button to see</p>
              <p className="mt-0">What we have for you today</p>
              <Button variant="primary" className="text-white w-25">
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
                      <BsUpcScan className="me-1"/>Scan
                    </Button>
                    <Button variant="primary" className="text-white w-100 card-button">
                      <BsFillCreditCardFill className="me-1"/>Top Up
                    </Button>
                    <Button variant="primary" className="text-white w-100 card-button">
                      <BsClockHistory  className="me-1"/>Transaction
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <CarouselWithItems items={[
              {
                imgSrc:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg", 
                imgAlt:"nope", 
                label:"Hellomotherfuckers", 
                description:"a;dsflkja;dflkja;dfklja;kldjf"
              }
            ]}/>
          </Col>
          <Col lg={4}>
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
