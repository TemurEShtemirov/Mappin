import React from 'react';
import GoogleMap from './GoogleMap';
import GoogleMapForm from './GoogleMapForm';

export default function App() {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <GoogleMap />
      <GoogleMapForm />
    </div>
  );
}
