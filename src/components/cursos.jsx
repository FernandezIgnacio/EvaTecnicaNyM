import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {buttin} from './inscripto.js'
function With({ title, name, descrip, boton }) {
  console.log(title, name, descrip, boton);
  return (
    <Card>
    <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {descrip}
        </Card.Text>
        <Button variant="primary">{boton}</Button>
      </Card.Body>
    </Card>
  );
}
export default With;