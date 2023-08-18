import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function Cursos({ title, name, descrip }) {
  console.log(title, name, descrip);
  return (
    <Card>
    <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {descrip}
        </Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>
  );
}
export default Cursos;