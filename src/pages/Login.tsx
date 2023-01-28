import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import HomeNavbar from "../components/Navbar";
import ShoppingMan from "../assets/shopping_women.png";
import { BsFillBasket2Fill } from "react-icons/bs";
import "./Login.scss";
import { useState } from "react";

const Login: React.FC = () => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event:React.FormEvent<HTMLInputElement>):void => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleValidateEmail = () => {
    const emailRex:RegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // if (emailRex.test(e.target.valid))
  }

  return (
    <div>
      <HomeNavbar />
      <Container className="login">
        <Row className="align-items-center">
          <Col className="picture">
            <Image src={ShoppingMan} alt="" fluid height={"100%"} />
          </Col>
          <Col>
            <Row className="p-5">
              <BsFillBasket2Fill size={30} className="basket-icon mb-3" />
              <h4 className="text-center">Hello there!</h4>
              <p className="text-center mb-0">Welcome to Hardware Shop</p>
              <p className="text-center mb-4">
                Please login to enable to use the shop
              </p>
              <Form noValidate validated={validated} onSubmit={} >
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    id="formEmail"
                    placeholder="Enter email"
                    onChange={ (e: any) =>}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remember Me" />
                </Form.Group>
                <Button variant="primary" type="submit" className="text-white">
                  Login
                </Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
