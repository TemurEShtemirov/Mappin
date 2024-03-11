import React from "react";
import { Map, Marker } from "./components/GoogleMapComponents";

export default function GoogleMapForm() {
    const [clicks, setClicks] = React.useState([]);
    const [zoom, setZoom] = React.useState(3); // initial zoom
    const [center, setCenter] = React.useState({ lat: 0, lng: 0 });

    const onChangeZoom = (event) => setZoom(Number(event.target.value));
    const onChangeLat = (event) =>
        setCenter({ ...center, lat: Number(event.target.value) });
    const onChangeLng = (event) =>
        setCenter({ ...center, lng: Number(event.target.value) });

    return (
        <div
            style={{
                padding: "1rem",
                flexBasis: "250px",
                height: "100%",
                overflow: "auto",
            }}
        >
            <label htmlFor="zoom">Zoom</label>
            <input
                type="number"
                id="zoom"
                name="zoom"
                value={zoom}
                onChange={onChangeZoom}
            />
            <br />
            <label htmlFor="lat">Latitude</label>
            <input
                type="number"
                id="lat"
                name="lat"
                value={center.lat}
                onChange={onChangeLat}
            />
            <br />
            <label htmlFor="lng">Longitude</label>
            <input
                type="number"
                id="lng"
                name="lng"
                value={center.lng}
                onChange={onChangeLng}
            />
            <h3>{clicks.length === 0 ? "Click on map to add markers" : "Clicks"}</h3>
            {clicks.map((latLng, i) => (
                <pre key={i}>{JSON.stringify(latLng.toJSON(), null, 2)}</pre>
            ))}
            <button onClick={() => setClicks([])}>Clear</button>
        </div>
    );
}
