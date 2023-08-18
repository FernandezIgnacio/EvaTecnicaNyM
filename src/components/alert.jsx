import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible(des, nam, title, boton) {
  const [show, setShow] = useState(true);
    console.log(des, nam, title, boton2)
  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>{nam}</Alert.Heading>
        <p>
          {des}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            {boton2}
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>{boton}</Button>}
    </>
  );
}

export default AlertDismissible;