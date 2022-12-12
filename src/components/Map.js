import React from 'react'
import GoogleMapReact from 'google-map-react'
import { LocationPin } from './Location'
function Map({location,zoomLevel}) {
  return (
    <div>
        <GoogleMapReact 
        bootstrapURLKeys={ { key: "AIzaSyAjm8q7Njm9VYl3UNCVGuSPn_gW0pdYpSA" } }
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  )
}

export default Map