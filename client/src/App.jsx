import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationDetails from './pages/LocationDetails'
import PageNotFound from './pages/PageNotFound'
import { Link } from 'react-router-dom'


const App = () => {
  
  const [locations, setLocations] = useState([]);


  useEffect(() => {
    const fetchLocations = async () => {
      const response = await fetch('http://localhost:3001/locations');
      const data =  await response.json();
      setLocations(data);      
    }
    fetchLocations();
  }, []);


  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<Locations data={locations}/>
    },
    {
      path:"/location/:id",
      element: <LocationDetails data={locations} />
    },
    {
      path:"/*",
      element: <PageNotFound />
    }
  ]);

  
  return ( 

    <div className="App">

      <header>
        <div className="header-container">
          <div className="header-left">
            <img src="/logo.png"/>
            <h1>Yardie</h1>
          </div>
          <div className="header-right">
            <Link to="/"><button className="homeBtn">Home</button></Link>
          </div>
        </div>
      </header>

        {element}
        
    </div>

  );
}

export default App;