import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AboutCard(person) {
  return (
    <Card className="about-card-view">
      <Card.Img variant="top" src={person.img} />
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>
          {person.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;