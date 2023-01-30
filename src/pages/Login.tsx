import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import HomeNavbar from "../components/Navbar";
import ShoppingMan from "../assets/shopping_women.png";
import { BsFillBasket2Fill } from "react-icons/bs";
import "./Login.scss";
import { Link } from "react-router-dom";

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
                <small>
                  Welcome to Hardware Shop <br /> Please login to enable to use the
                  shop
                </small>
                <Form className="mt-4">
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="text-white">
                    Login
                  </Button>
                </Form>
                <Row>
                  <small className="mt-5 text-center">Don't have an account yet?
                    <Link to={"/Register"} className="ms-2 text-decoration-none">Sign Up</Link>
                  </small>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default Login;
