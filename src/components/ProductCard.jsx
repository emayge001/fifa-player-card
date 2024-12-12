import Card from "react-bootstrap/Card";
import CustomButton from "./CustomButton";


const ProductCard = () => {
    const handleBuyNow = () => {
        alert("Buy now successful");
    };
  return (
    <div style={{display: "flex"}}>
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img
        variant="top"
        src="https://cdn.theathletic.com/app/uploads/2022/09/10053646/Mbappe_231747-1.png"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <CustomButton btnFunc={handleBuyNow} bgColor="brown">Buy Now</CustomButton>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img
        variant="top"
        src="https://i2-prod.mirror.co.uk/incoming/article27968973.ece/ALTERNATES/n310p/0_Benzema_165153.png"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <CustomButton btnFunc={handleBuyNow} bgColor="brown">Buy Now</CustomButton>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img
        variant="top"
        src="https://i2-prod.mirror.co.uk/incoming/article27968973.ece/ALTERNATES/n310p/0_Benzema_165153.png"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <CustomButton btnFunc={handleBuyNow} bgColor="brown">Buy Now</CustomButton>
      </Card.Body>
    </Card>
    </div>
  );
};

export default ProductCard;
