import React, { useState, useEffect } from 'react';
import { Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import * as ELG from 'esri-leaflet-geocoder';

// Define the default icon
let DefaulIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

const GeoCorderMarker = ({ address }) => {
    const map = useMap(); // Correct use of useMap hook
    const [position, setPosition] = useState([60, 19]);

    useEffect(() => {
        ELG.geocode().text(address).run((err, results, response) => {
            if (err) {
                console.error('Geocoding error:', err);
                return;
            }
            if (results?.results?.length > 0) {
                const { lat, lng } = results.results[0].latlng;
                setPosition([lat, lng]);
                map.flyTo([lat, lng], 6);
            }
        });
    }, [address, map]); // Add 'map' to dependency array to avoid stale references

    return (
        <Marker position={position} icon={DefaulIcon} />
    );
}

export default GeoCorderMarker;

