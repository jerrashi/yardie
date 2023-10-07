

import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './LocationDetails.css';

const LocationDetails = ({data}) => {

    const [location, setLocation] = useState({id: 0, name: "", pricepoint: "", audience: "", image: "", description: "", submittedby: "", submittedon: ""})

    const { id } = useParams()

    useEffect(() => {
        const fetchLocationById = async () => {
            const response = await fetch(`http://localhost:3001/locations/${id}`);
            const data = await response.json();
            setLocation(data);
        }

        fetchLocationById();

    }, [data, id]);


    return (
        <div className="LocationDetails">
            <main id="location-content" class="location-info">
                <div class="image-container">
                    <img id="image" src={location.image} />
                </div>
                <div class="location-details">
                    <h2 id="name">{location.name}</h2>
                    <p id="submittedBy">{'Submitted By: ' + location.submittedby}</p>
                    <p id="pricePoint">{'Price: ' + location.pricepoint}</p>
                    <p id="audience">{'Great For: ' + location.audience}</p>
                    <p id="description">{location.description}</p>
                </div>
            </main>
        </div>
    )
}

export default LocationDetails