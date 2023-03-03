import { useState, useEffect } from "react";
import { Button, Card, Container } from "react-bootstrap";
import * as Navbar from "../../components/Navbar";
import StockCard from "../../components/StockCard";

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

  useEffect(() => {
    console.log(stocking)
  }, [stocking])

  return (
    <div>
      <Navbar.DashbaordNavbar />
      <Container className="my-3">
        <div className="d-flex flex-row">
          <h2 className="fw-bold">Stocking</h2>
        </div>
        <div className="d-flex flex-row">
          {stocking.map((item) => (
            <StockCard 
              item={item}
              handleChange={handleSave}
             />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Stocking;
