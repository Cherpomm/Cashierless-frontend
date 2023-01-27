import { Col, Container, Form, Image, Row } from "react-bootstrap";
import HomeNavbar from "../components/Navbar";
import ShoppingMan from "../assets/shopping_women.png";
import { BsFillBasket2Fill } from "react-icons/bs";
import "./Login.scss";

const Login: React.FC = () => (
  <div className="login">
    <HomeNavbar />
    <Container>
      <Row>
        <Col>
          <Image src={ShoppingMan} alt="" fluid height={"100%"}/>
        </Col>
        <Col>
          <BsFillBasket2Fill size={30} className="basket-icon mb-3"/>
          <h4 className="font-weight-bold">Hello there!</h4>
          <p>Welcome to Hardware Shop <br/> Please login to enable to use the shop</p>
          <Form></Form>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Login;
