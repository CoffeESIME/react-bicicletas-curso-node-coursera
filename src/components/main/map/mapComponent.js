import React from 'react';
import { MapContainer, TileLayer,  Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Container } from 'react-bootstrap';

/*Creamos un nuevo Marker para que cada vez que aparezca un
nuevo marker, aparezca el popup*/
function Mapa(){
    return (
        <Container>
<MapContainer center={[19.353536, -99.318017]} zoom={17} scrollWheelZoom={false} style={{height: '25rem', width: '100%'}}> 
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
</Container>
    )

}

export default Mapa;