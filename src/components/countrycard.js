import React from 'react'
import { Link } from 'react-router-dom'
const countrycard = ({ img, country, pop, reg, cap, id }) => {
   return (
      <div className='card'>
         <Link to={`/country/${id}`} >
            <img src={img} alt={country} />
            <div className='card__info'>
               <h2>{country}</h2>
               <p>Population: {pop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
               <p>Region: {reg}</p>
               <p>Capital: {cap}</p>
            </div>
         </Link>
      </div>
   )
}

export default countrycard