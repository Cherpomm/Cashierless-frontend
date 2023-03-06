import { useState, useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import * as Navbar from "../../components/Navbar";
import StockCard from "../../components/StockCard";
import "./Stocking.scss";

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
    picture:
      "https://backend.tops.co.th/media/catalog/product/8/8/8850718809028_05-04-2021.jpg",
  },
  {
    id: 2,
    name: "Lay Original",
    price: 20,
    description: "Helloworld",
    count: 10,
    picture:
      "https://backend.tops.co.th/media/catalog/product/8/8/8850718809028_05-04-2021.jpg",
  },
  {
    id: 3,
    name: "Lay Original",
    price: 20,
    description: "Helloworld",
    count: 10,
    picture:
      "https://backend.tops.co.th/media/catalog/product/8/8/8850718809028_05-04-2021.jpg",
  },
  {
    id: 4,
    name: "Lay Original",
    price: 20,
    description: "Helloworld",
    count: 10,
    picture:
      "https://backend.tops.co.th/media/catalog/product/8/8/8850718809028_05-04-2021.jpg",
  },
  {
    id: 5,
    name: "Lay Original",
    price: 20,
    description: "Helloworld",
    count: 10,
    picture:
      "https://backend.tops.co.th/media/catalog/product/8/8/8850718809028_05-04-2021.jpg",
  },
];

const Stocking: React.FC = () => {
  const [stocking, setStocking] = useState(mockStock);
  const handleSave = (data: stock) => {
    setStocking(mockStock);
  };

  useEffect(() => {
    console.log(stocking);
  }, [stocking]);

  return (
    <div>
      <Navbar.DashbaordNavbar />
      <Container className="my-3">
        <div className="d-flex flex-row">
          <h2 className="fw-bold">Stocking</h2>
        </div>
        <div className="d-flex flex-row">
          <Row>
            <Col md={9}>
              <Row>
                {stocking.map((item) => (
                  <StockCard
                    key={item.id}
                    item={item}
                    handleChange={handleSave}
                  />
                ))}
              </Row>
            </Col>
            <Col md={3}>
              <div className="d-fix">
                <h4 className="fw-bold">Summary</h4>
                <div style={{ borderBottom: "solid" }} />
                {mockStock.map((item) => (
                  <div
                    className="d-flex flex-row justify-content-between my-2"
                    key={item.id}
                  >
                    <span>{item.name}</span>
                    <span>
                      x{item.count} {item.count * item.price}B
                    </span>
                  </div>
                ))}
                <div className="d-flex flex-row justify-content-between mt-3">
                  <span>Total</span>
                  <span>x{mockStock.reduce((a, b) => a + b.count, 0)}</span>
                </div>
                <div style={{ borderBottom: "solid" }} />
              </div>
            </Col>
          </Row>
        </div>

        {/* <div className="d-flex flex-row">
          {stocking.map((item) => (
            <StockCard 
              item={item}
              handleChange={handleSave}
             />
          ))}
        </div> */}
      </Container>
    </div>
  );
};

export default Stocking;
