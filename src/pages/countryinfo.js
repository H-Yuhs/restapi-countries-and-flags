import React from 'react'
import { useEffect, useState } from 'react'
import Button from '../components/button'
import { ContextUser } from '../hooks/context'
import { useParams, Link } from 'react-router-dom'
const Countryinfo = () => {
   const [country, setCountry] = useState([])
   // const [borders, setBorders] = useState()
   const [isLoading, setIsLoading] = useState(true)
   const [isError, setIsError] = useState(false)
   const { countries } = ContextUser()
   const { id } = useParams()

   useEffect(() => {
      fetch(`https://restcountries.com/v3.1/alpha/${id}`)
         .then(response => {
            if (response.status >= 200 && response.status <= 299)
               return response.json()
            else {
               setIsLoading(false)
               setIsError(true)
            }
         })
         .then(response => {
            if (response) {
               setCountry(response)
               setIsLoading(false)
               setIsError(false)
            } else {
               setCountry([])
            }
         })
         .catch(err => console.error(err))
   }, [id])
   if (isLoading) {
      return <h2>Loading...</h2>
   }
   return (
      <>
         {(country && !isLoading) && <div className='container country__container' >
            <Button />
            <div className='country__indie'>
               <img src={country[0].flags.png} alt={country[0].name.common} />
               <div className='country'>
                  <h2 className='country__name'>{country[0].name.common}</h2>
                  <div className='country__info'>
                     <p>Native Name: <span>{Object.values(country[0].name.nativeName)[0].official}</span></p>
                     <p>Top Level Domain: <span>{country[0].tld ? country[0].tld[0] : 'No TLD info'}</span></p>
                     <p>Population: <span>{country[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></p>
                     <p>Currency: <span>{`${Object.values(country[0].currencies)[0].name} (${Object.values(country[0].currencies)[0].symbol})`}</span></p>
                     <p>Region: <span>{country[0].region}</span></p>
                     <p>Languages: <span>{Object.values(country[0].languages).join(',')}</span></p>
                     <p>Sub-Region: <span>{country[0].subregion}</span></p>
                     <p>Capital: <span>{country[0].capital[0]}</span></p>
                  </div>
                  <div className='country__borders'>
                     <div className="border__list" >
                        Borders Countries:
                        {country[0].borders ? country[0].borders.map((ctr, i) =>
                           <span key={i}><Link to={`/country/${ctr}`}>{countries.map(ctm => ctm.cca3 === ctr && ctm.name.common)}</Link></span>)
                           : 'This country has no borders'}
                     </div>
                  </div>

               </div>
            </div>
         </div >}
      </>
   )
}

export default Countryinfo