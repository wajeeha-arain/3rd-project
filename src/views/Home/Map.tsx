"use client";

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 52.3676, 
  lng: 4.9041, 
};

const Map = () => {
  return (
    <div className="main-container">
<div className="py-10  rounded-lg">
<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          <Marker position={center} />
        </GoogleMap >
      </LoadScript>
</div>
    </div>
  );
};

export default Map;
