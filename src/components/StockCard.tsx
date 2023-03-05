import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";

interface stock {
  id: number;
  name: string;
  price: number;
  description: string;
  count: number;
  picture: string;
}

interface StockCardProps {
  item: stock;
  handleChange: (data:stock) => void;
}

const StockCard: React.FC<StockCardProps> = (props) => {
  const [count, setCount] = useState(props.item.count);

  const handlePlus = () => {
    props.item.count++;
    setCount(props.item.count)
    console.log("Plus" + props.item.count)
    props.handleChange(props.item)
  }
  const handleMinus = () => {
    props.item.count !== 0 && props.item.count--;
    setCount(props.item.count)
    console.log("Minus" + props.item.count)
    props.handleChange(props.item)
  }
  
  return (
    <Card style={{ width: "18rem", height: "22rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>{props.item.description}</Card.Text>
        <div className="d-flex flex-row align-items-center">
          <Button variant="primary" onClick={handlePlus}>+</Button>
          <p className="border">{props.item.count}</p>
          <Button variant="primary" onClick={handleMinus}>-</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StockCard;
