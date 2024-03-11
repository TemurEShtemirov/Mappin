import React from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Map, Marker, useDeepCompareEffectForMaps } from "./components/GoogleMapComponents";

export default function GoogleMap() {
    return (
        <Wrapper apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} render={render}>
            <MapContainer />
        </Wrapper>
    );
}

const render = (status) => {
    return <h1>{status}</h1>;
};

function MapContainer() {
    const [clicks, setClicks] = React.useState([]);
    const [zoom, setZoom] = React.useState(3); // initial zoom
    const [center, setCenter] = React.useState({ lat: 0, lng: 0 });

    const onClick = (e) => {
        // avoid directly mutating state
        setClicks([...clicks, e.latLng]);
    };

    const onIdle = (m) => {
        console.log("onIdle");
        setZoom(m.getZoom());
        setCenter(m.getCenter().toJSON());
    };

    return (
        <Map
            center={center}
            onClick={onClick}
            onIdle={onIdle}
            zoom={zoom}
            style={{ flexGrow: "1", height: "100%" }}
        >
            {clicks.map((latLng, i) => (
                <Marker key={i} position={latLng} />
            ))}
        </Map>
    );
}
