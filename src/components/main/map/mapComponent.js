import React from 'react';
import { MapContainer, TileLayer,  Marker, Popup } from 'react-leaflet';
import '../../../App.css'
import { Container } from 'react-bootstrap';


function Mapa(props){
    return (
        <Container>
<MapContainer center={[19.353536, -99.318017]} zoom={17} scrollWheelZoom={false} style={{height: '25rem', width: '100%'}}> 
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {props.bicis.map((bici,index)=>(
      <Marker key={index} position={[bici.ubicacion[0], bici.ubicacion[1]]}>
          <Popup>
     {`Id=${bici.id}, Modelo=${bici.modelo}`}
    </Popup>
  </Marker>
    ))}
</MapContainer>
</Container>
    )

}

export default Mapa;