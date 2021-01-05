import { Card, CardImg, CardBody, CardSubtitle, CardTitle, Button } from "reactstrap";

import "./Card.css";
interface Props {
  id: String;
  name: String;
  price: Number;
  image: string;
}

const MyCard: React.FunctionComponent<any> = ({
  appartment,
}: {
  appartment: Props;
}) => (
  <Card className="appartment-card">
    <CardImg className="card-image" src={appartment.image} />
    <div className="card-body-wrapper">
      <Button className="cartBtn">Add To Cart</Button>
    </div>
    <CardBody>
      <CardTitle tag="h6">{appartment.name}</CardTitle>
      <CardSubtitle tag="h6" className="text-muted">
        ${appartment.price}
      </CardSubtitle>
    </CardBody>
  </Card>
);
export default MyCard;
