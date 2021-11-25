import React, { useState } from "react";
import { Form, Row, Button, Col, Container } from "react-bootstrap";
import axios from "axios";

function Crear() {
  const [datosCrearBici, setDatos] = useState({
    id: 0,
    color: "",
    modelo: "",
    lat:0,
    lng:0
  });
  const [validated, setValidated] = useState(false);

  function handleChange(evt) {
    const value = evt.target.value;

      setDatos({
        ...datosCrearBici,
        [evt.target.id]: value
      });
      }
  

  const handleSubmit = (event) => {

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setDatos({
        id: event.target[0].value,
        color: event.target[2].value,
        modelo: event.target[1].value,
        lat: event.target[3].value,
        lng: event.target[4].value,
      });
    setValidated(true);
    event.preventDefault();

    axios
      .post(`http://192.168.1.70:3300/bicicletas/create`, { datosCrearBici })
      .then((res) => {
        console.log("datos");
        console.log(res);
        console.log(res.data);
      });
    window.location = "http://192.168.1.70:3000/bicicletas";
  };
  return (
    <>
      <Container>
        <Form noValidate validated={validated} onSubmit={handleSubmit} > 
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Id</Form.Label>
              <Form.Control
                required
                id="id"
                type="number"
                placeholder="Id Bicicleta"
                onChange={handleChange} 
              />
              <Form.Control.Feedback>Se ve bien!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Modelo</Form.Label>
              <Form.Control
                required
                id="modelo"
                type="text"
                placeholder="Modelo"
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
                required
                onChange={handleChange} 
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
                required
                onChange={handleChange} 
              />
              <Form.Control.Feedback type="invalid">
                Por favor brinda una latitud.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3">
              <Form.Label> </Form.Label>
              <Form.Control
                type="text"
                id="lng"
                placeholder="Longitud"
                required
                onChange={handleChange} 
              />
              <Form.Control.Feedback type="invalid">
                Por favor proporciona una longitud.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit">Crear</Button>
        </Form>
      </Container>
    </>
  );
}

export default Crear;
