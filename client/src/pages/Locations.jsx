import React, { useState, useEffect } from 'react'
import './Locations.css'
import Card from '../components/Card'


const Locations = (props) => {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        setLocations(props.data)
    }, [props])
    
    return (
        <div className="Locations">
            <main>
            {
                locations && locations.length > 0 ?
                locations.map((location,index) => 
                    
                   <Card id={location.id} 
                         image={location.image} 
                         name={location.name} 
                         pricepoint={location.pricepoint} 
                         audience={location.audience} />

                ) : <h3 className="noResults">{'No Locations Yet 😞'}</h3>
            }
            </main>
        </div>  
    )
}

export default Locations