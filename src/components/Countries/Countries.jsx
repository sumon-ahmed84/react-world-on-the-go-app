import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountry=(country)=>{
        console.log('visited country added',country);
        const newVisitedCountries=[...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    const countriesData=use(countriesPromise);
    const countries=countriesData.countries;
    return (
        <div>
            <h1 className="text-center">All Countries:{countries.length}</h1>
            <h3 className="text-center">Total Visited Countries:{visitedCountries.length}</h3>
            <div className="countries">
                {
                countries.map(country=><Country key={country.cca3.cca3} country={country} handleVisitedCountry={handleVisitedCountry}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;
