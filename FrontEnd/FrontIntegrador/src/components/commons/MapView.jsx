import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapView = ({ coordinates }) => {
  return (
    <MapContainer style={{ height: '500px', width: '85vw' }} center={coordinates} zoom={13} scrollWheelZoom={false} >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />

      <Marker position={coordinates}>
        <Popup>
          Aca te espera tu vehiculo <br /> Que empieza tu viaje!.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MapView