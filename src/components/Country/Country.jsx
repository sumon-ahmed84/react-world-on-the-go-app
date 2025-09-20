import React, { useState } from 'react';
import './country.css'

const Country = ({country, handleVisitedCountry}) => {
    const [visited, setVisited] = useState(false);
    
    const handeleVisitCountry=()=>{
        // toggle
            // 1st way
        // if
        // (visited){
        //     setVisited(false);
        // }else{
        //     setVisited(true);
        // }
            // 2nd way
        setVisited(!visited);
            // 3rd way
        // setVisited(visited?false:true);
        handleVisitedCountry(country);
        
    }
    return (
        <div className={`country ${visited &&'country-visited'}`}>
            <img src={country.flags.flags.png }alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area}
                {country.area.area>300000? '(Large Country)':' (Small Country)'}
            </p>
            <button onClick={handeleVisitCountry}>
                { visited? 'visited':'Not Visited'}
            </button>
        </div>
    );
};

export default Country;