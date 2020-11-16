import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';

function Marker() {
  return <Icon name='marker' size='big' color='red' />;
}

export default function EventDetailedMap({ latLng }) {
  const zoom = 14;
  return (
    <Segment attached='bottom' style={{ padding: 0 }}>
      <div style={{ height: 300, width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBV7mS6i172ZA9Vd-_03EestXst-O4UqNs' }}
          center={latLng}
          zoom={zoom}
        >
          <Marker lat={59.955413} lng={30.337844} />
        </GoogleMapReact>
      </div>
    </Segment>
  );
}
