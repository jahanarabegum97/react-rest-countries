import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,population,flags,region,area} = props.country;
    // console.log(props.country)
   return(
    <div className='country bg-warning'>
        <h2>Name: {name.common}</h2>
        <img src={flags.png} alt="" />
        <p>Population: {population}</p>
        <p><small>Region: {region}</small></p>
        <p><small>Area: {area}</small></p>

    </div>
   )
   
};
export default Country;