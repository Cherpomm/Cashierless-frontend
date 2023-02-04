import { Button, Col, Container, Row } from "react-bootstrap";
import HomeNavbar from "../components/Navbar";

const Profile: React.FC = () => {
  return (
    <div>
      <HomeNavbar />
      <Container>
        <Row className="d-flex flex-row justify-content-center">
          <Col lg={7} className="border">
            <Row>
              <Col>
                <h2 className="d-inline border">Edit Profile</h2>
                <p>
                  Store Manager will get to see you with the information below
                </p>
              </Col>
              <Col>
                <Button className="text-white">Cancel</Button>
                <Button className="text-white">Save</Button>
              </Col>
            </Row>
          </Col>
          <Col lg={3} className="border"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
