import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import GeoCorderMarker from './GeoCorderMarker'

const Map = ({address,city,country}) => {
  return (
    <div className='mt-6'>
          <MapContainer
              center={[53.35, 18.8]}
              zoom={1}
              scrollWheelZoom={false}
              style={{
                  width: "100%",
                  marginTop: "20px",
                  zIndex: "0",
                  height: "50vh",
                  //   backgroundColor:"black"
                  borderRadius:"10PX"
              }}
          >
              <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
              <GeoCorderMarker address={`${address} ${city} ${country}` } />
        </MapContainer>
    </div>
  )
}

export default Map