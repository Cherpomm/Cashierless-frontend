import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import * as Navbar from "../../components/Navbar";

interface stock {
  id: number;
  name: string;
  price: number;
  description: string;
  count: number;
  picture: string;
}

const mockStock: stock[] = [
  {
    id: 1,
    name: "Lay Original",
    price: 20,
    description: "Helloworld",
    count: 10,
    picture: "Hello",
  },
  {
    id: 2,
    name: "Lay Original",
    price: 20,
    description: "Helloworld",
    count: 10,
    picture: "Hello",
  },
  {
    id: 3,
    name: "Lay Original",
    price: 20,
    description: "Helloworld",
    count: 10,
    picture: "Hello",
  },
  {
    id: 4,
    name: "Lay Original",
    price: 20,
    description: "Helloworld",
    count: 10,
    picture: "Hello",
  },
  {
    id: 5,
    name: "Lay Original",
    price: 20,
    description: "Helloworld",
    count: 10,
    picture: "Hello",
  },
];

const Stocking: React.FC = () => {
  const [stocking, setStocking] = useState(mockStock);
  const handleSave = () => {};
  return (
    <div>
      <Navbar.DashbaordNavbar />
      <Container className="my-3">
        <div className="d-flex flex-row">
          <h2 className="fw-bold">Stocking</h2>
        </div>
        <div className="d-flex flex-row">
          {mockStock.map((item) => (
            <Card style={{ width: "18rem", height: "22rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <div className="d-flex flex-row align-items-center">
                  <Button variant="primary">+</Button>
                  <p className="border">{item.count}</p>
                  <Button variant="primary">-</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Stocking;
