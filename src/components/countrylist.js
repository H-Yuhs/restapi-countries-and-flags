import React from 'react'
import Countrycard from './countrycard'
import { ContextUser } from '../hooks/context'
const CountryList = () => {
   const { countries, isLoading } = ContextUser()
   if (isLoading) {
      return (
         <h2>Loading...</h2>
      )
   }
   if (countries.length < 1 && !isLoading) {
      return (
         <h2>No Matching Country</h2>
      )
   }
   return (
      <div className='card__list'>
         {
            countries.sort((a, b) => a.name.common > b.name.common ? 1 : -1)
               .map(country => {
                  const { region, population, capital, flags: { png }, name: { common } } = country
                  return (
                     < Countrycard img={png} country={common} pop={population} reg={region} cap={capital} key={country.cca3} id={country.cca3} />
                  )
               })
         }
      </div>
   )
}

export default CountryList