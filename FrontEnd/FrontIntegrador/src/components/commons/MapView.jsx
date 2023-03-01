import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const position = [-32.8895, -68.8458]

const MapView = ({ coordinates }) => {
  return (
    <MapContainer style={{ height: '500px', width: '95vw' }} center={coordinates} zoom={10} scrollWheelZoom={false} >
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