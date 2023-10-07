import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => { 
    
    const [location, setLocation] = useState({id: 0, name: "", pricepoint: "", audience: "", image: ""})

    useEffect(() => {
        setLocation({id: props.id, name: props.name, pricepoint: props.pricepoint, audience: props.audience, image: props.image});
    }, [props]);

    return (
        <div className="card">
            <div className='top-container' style={{ backgroundImage:`url(${location.image})`}}></div>
            <div className='bottom-container'>
                <h3>{location.name}</h3>
                <p>{'Price: ' + location.pricepoint}</p>
                <p>{'Great For: ' + location.audience}</p>
                <Link to={'/location/' + location.id}><a>Read More →</a></Link>
            </div>
        </div>
    )
}

export default Card