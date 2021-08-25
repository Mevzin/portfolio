import { Card } from "react-bootstrap";
import { CardProfile, ImgProfile } from "./style";

export function Profile() {

  return (
    <CardProfile>
      <div>
        <ImgProfile src="./images/assets/user.png" />
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </div>
    </CardProfile>
  );
}