'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';

const LocationSearch = ({ locationSearch }) => {
    // const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [mapCenter, setMapCenter] = useState([51.505, -0.09]);
    const [markerPosition, setMarkerPosition] = useState(null);

    L.Marker.prototype.options.icon = L.icon({
        iconUrl: icon,
    });

    const useDebounce = (value, delay) => {
        const [debouncedValue, setDebouncedValue] = useState(value);

        useEffect(() => {
            const handler = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            return () => {
                clearTimeout(handler);
            };
        }, [value, delay]);

        return debouncedValue;
    };

    const debouncedLocationSearch = useDebounce(locationSearch, 500);

    const handleSearch = async (event) => {
        if (event) {
            event.preventDefault();
        }
        if (debouncedLocationSearch) {
            const response = await axios.get(`/api/location_search`, {
                params: {
                    q: debouncedLocationSearch,
                    format: 'json',
                    limit: 10,
                },
            });
            setResults(response.data);
            if (response.data.length > 0) {
                setMapCenter([response.data[0].lat, response.data[0].lon]);
                setMarkerPosition([response.data[0].lat, response.data[0].lon]);
            }
        }
    }

    useEffect(() => {
        handleSearch();
    }, [debouncedLocationSearch])

    const MapController = () => {
        const map = useMap();
        if (mapCenter) {
            map.setView(mapCenter, 13);
        }
        return null;
    };

    return (
        <div>
            <MapContainer
                key={mapCenter.join(',')}
                center={mapCenter}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '400px', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    errorTileUrl='https://via.placeholder.com/256x256?text=Tile+Error'
                />
                {markerPosition &&
                    <Marker position={markerPosition}>
                        <Popup>
                            {debouncedLocationSearch}
                        </Popup>
                    </Marker>
                }
                <MapController />
            </MapContainer>
        </div>
    );
};

export default LocationSearch;
