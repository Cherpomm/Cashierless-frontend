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
    <Card style={{ width: "250px", margin: "10px", paddingTop: "5px", paddingBottom: "5px" }}>
      <Card.Img variant="top" src={props.item.picture} style={{width: "250px", height: "200px", objectFit: "contain"}}/>
      <Card.Body>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>{props.item.description}</Card.Text>
        <div className="d-flex align-items-center">
          <Button variant="primary text-white rounded-circle" onClick={handlePlus}>+</Button>
          <p className="m-1">{props.item.count}</p>
          <Button variant="primary text-white rounded-circle" onClick={handleMinus}>-</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StockCard;
