import React, { useEffect, useState } from 'react';
import api from '../../services/api';
export default function DashBord() {
    const [spots, setSpots] = useState([])


    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getStorage.getItem('user');
            const response = await api.get('/dashBord', {
                headers: { user_id }
            });
            setSpots(response.data);
        }
        loadSpots();
    }, [])

    return (
        <>
            <url className="spot-list">
            {spots.map(spot => (
                <li key= {spot._id }>
                    <header />
                    <strong>{spot.company}</strong>
                    <span>{spot.price}</span>
                </li>

            ))}
            </url>
        </>
    )
}