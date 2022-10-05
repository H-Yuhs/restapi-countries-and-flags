import React from 'react'
import { useEffect, useRef } from 'react'
import { ContextUser } from '../hooks/context'
const FindRegion = () => {
   const url = `https://restcountries.com/v3.1/region/`
   const [region, setRegion] = React.useState()
   const initialRender = useRef(true)
   const { setCountries, setIsLoading, setIsError } = ContextUser()
   const searchRegion = (e) => {
      initialRender.current = false
      setRegion(e.target.value)
   }
   useEffect(() => {
      if (initialRender.current) return
      fetch(`${url}${region}`)
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
               setCountries(response)
               setIsLoading(false)
               setIsError(false)
            } else {
               setCountries([])
            }
            console.log(`${url}${region}`)
         })
         .catch(err => console.error(err))

   }, [region])
   return (
      <form onSubmit={(e) => {
         e.preventDefault()
      }} >
         <select name="filter" id="filter" onChange={searchRegion} >
            <option disabled selected hidden>
               Filter by Region
            </option>
            <option value="Africa">
               Africa
            </option>
            <option value="America">
               America
            </option>
            <option value="Asia">
               Asia
            </option>
            <option value="Europe">
               Europe
            </option>
            <option value="Oceania">
               Oceania
            </option>
         </select>
      </form>

   )
}

export default FindRegion