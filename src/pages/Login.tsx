import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import HomeNavbar from "../components/Navbar";
import ShoppingMan from "../assets/shopping_women.png";
import { BsFillBasket2Fill } from "react-icons/bs";
import "./Login.scss";

const Login: React.FC = () => {

  return(
    <div className="login">
      <HomeNavbar />
      <Container className="p-4 align-items-center">
        <Row className="justify-content-center align-items-center">
          <Col lg={5} className="d-none d-lg-block">
            <Image src={ShoppingMan} alt="" fluid/>
          </Col>
          <Col lg={5}>
            <Card className="px-5 py-3 rounded-5">
              <Card.Body>
                <BsFillBasket2Fill size={30} className="basket-icon mb-3" />
                <h4>Hello there!</h4>
                <p>
                  Welcome to Hardware Shop <br /> Please login to enable to use the
                  shop
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Login;
