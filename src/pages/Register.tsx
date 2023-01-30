import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";
import HomeNavbar from "../components/Navbar";
import ShoppingMan from "../assets/shopping_man.png";
import { BsFillBasket2Fill } from "react-icons/bs";
import "./Register.scss";
import { Link } from "react-router-dom";

const Register: React.FC = () => {

  return(
    <div className="register">
      <HomeNavbar />
      <Container className="p-4">
        <Row className="justify-content-center align-items-center">
          <Col lg={5} className="d-none d-lg-block">
            <Image src={ShoppingMan} alt="" fluid/>
          </Col>
          <Col lg={5}>
            <Card className="py-5 rounded-5 align-items-center">
              <Card.Body>
                <BsFillBasket2Fill size={30} className="basket-icon mb-3" />
                <h4>Register</h4>
                <small>
                  Let's get you all set up so you can verify your<br/> personal account and begin setting up your profile
                </small>
                <Form className="mt-4">
                  <Form.Group className="mb-2" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="firstName" placeholder="Ex. Warit" />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="lastName" placeholder="Ex. Chan-o-cha" />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ex. warit@bing.com" />
                  </Form.Group>
                  <Form.Group className="mb-2" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Has to be 8 letter or longer" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="confirmPassword" placeholder="Has to be 8 letter or longer" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formPolicy">
                    <Form.Check type="checkbox" label="Policy" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="text-white w-100">
                    Register
                  </Button>
                </Form>
                <Row>
                  <small className="mt-5 text-center">Want to register as Store Manager?
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

export default Register;