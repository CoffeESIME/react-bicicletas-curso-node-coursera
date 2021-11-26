import React, { useState } from "react";
import { Table, Button, Modal, Form, Row, Col ,Container} from "react-bootstrap";
import axios from "axios";
import Mapa from "../map/mapComponent";
function Bicis(props) {
  const [Modal_show_1, setShow_1] = useState(false);
  const [datosModalEditar, setDatos] = useState({
      id:0,
      color:"",
      modelo:"",
      lat:0,
      lng:0
    });
  const [validated, setValidated] = useState(false);

const handleDelete=(event)=>{
  axios.post(`http://192.168.1.70:3300/bicicletas/${event.id}/delete`,{ id:event.id })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    window.location = "http://192.168.1.70:3000/bicicletas";

}
  const handleSubmit = (event) => {
    setDatos({
        id:event.target[0].value,
        color:event.target[2].value,
      modelo:event.target[1].value,
      lat:event.target[3].value,
      lng:event.target[4].value
    });
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);
    axios.post(`http://192.168.1.70:3300/bicicletas/${datosModalEditar.id}/update`, { datosModalEditar })
    .then(res => {
      console.log("////////")
      console.log(res);
      console.log(res.data);
      console.log("////////")

    })
  };

  const handleShow_1 = (e) => {
    setShow_1(true);
    setDatos({ id:e.id,
      color:e.color,
      modelo:e.modelo,
      lat:e.ubicacion[0],
      lng:e.ubicacion[1]
    });
  };

  function handleChange(evt) {
    const value = evt.target.value;

      setDatos({
        ...datosModalEditar,
        [evt.target.id]: value
      });
      }

  return (
    <>
      <Modal
        show={Modal_show_1}
        onHide={() => setShow_1(false)}
        aria-labelledby="modal_editar"
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal_editar">Editar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" >
                <Form.Label>Id</Form.Label>
                <Form.Control
                  required
                  id="id"
                  type="number"
                  placeholder="Id Bicicleta"
                  defaultValue={datosModalEditar.id}
                  onChange={handleChange} 
                  disabled
                />
                <Form.Control.Feedback>Se ve bien!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" >
                <Form.Label>Modelo</Form.Label>
                <Form.Control
                  required
                  id="modelo"
                  type="text"
                  placeholder="Modelo"
                  defaultValue={datosModalEditar.modelo}
                  onChange={handleChange} 
                />
                <Form.Control.Feedback>Se ve bien!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>Color</Form.Label>
                <Form.Control
                  type="text"
                  id="color"
                  placeholder="Color"
                  defaultValue={datosModalEditar.color}
                  onChange={handleChange} 
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor agrega un color valido.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3">
                <Form.Label>Ubicacion</Form.Label>
                <Form.Control
                  type="text"
                  id="lat"
                  placeholder="Latitud"
                  defaultValue={datosModalEditar.lat }
                  onChange={handleChange} 
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor brinda una latitud.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" >
                <Form.Label> </Form.Label>
                <Form.Control
                  type="text"
                  id="lng"
                  placeholder="Longitud"
                  defaultValue={datosModalEditar.lng}
                  onChange={handleChange} 
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Por favor proporciona una longitud.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit">Editar</Button>
          </Form>
        </Modal.Body>
      </Modal>
<Container fluid >
    <Row>
        <h1 className="text-center">Tabla de bicicletas disponibles</h1>
      <Table responsive striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Id</th>
            <th>Color</th>
            <th>Modelo</th>
            <th colSpan="3">Ubicacion</th>
          </tr>
        </thead>
        <tbody>
          {props.bicis.map((bici, index) => (
            <tr key={index}>
              <td>{bici.id}</td>
              <td>{bici.color}</td>
              <td>{bici.modelo}</td>
              <td>{bici.ubicacion}</td>
              <td>
                <Button variant="primary" onClick={() => handleShow_1(bici)}>
                  Editar
                </Button>
              </td>
              <td>
                <Button variant="primary" onClick={()=>handleDelete(bici)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Row>
      </Container>
      <Mapa bicis={props.bicis}></Mapa>
    </>
  );
}

export default Bicis;
