import React, { useEffect, useState } from "react";
import axios from "axios";

import LocationCard from "./LocationCard";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);

    const [searchURL, setSearchURL] = useState("https://rickandmortyapi.com/api/location/")

    useEffect(() => {
        axios.get(`${searchURL}`)
        .then(response => {
          console.log(response);
          let locationList = response.data.results;
          console.log(locationList);
          setLocations(locationList);
        })
        .catch(err => {
          console.log(err);
        })
    }, [searchURL]);

    return (
        <section className="location-list grid-view">
            {locations.map(location => (
                <LocationCard
                    key={location.id} 
                    name={location.name}
                    type={location.type}
                    dimension={location.dimension}
                    residents={location.residents.length}
                />
            ))
            }
        </section>
    )
}
