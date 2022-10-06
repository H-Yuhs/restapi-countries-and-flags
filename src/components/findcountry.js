import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { useEffect, useRef, useState } from 'react'
import { ContextUser } from '../hooks/context'
const Findcountry = () => {
   const initialRender = useRef(true)
   const [searchValue, setSearchvalue] = useState()
   const [debouncedInput, setDebouncedInput] = useState(searchValue);
   const { setCountries, setIsError, setIsLoading, setKey, returnDefault } = ContextUser()
   useEffect(() => {
      const timer = setTimeout(() => setSearchvalue(debouncedInput), 300);
      return () => clearTimeout(timer);
   }, [debouncedInput]);
   useEffect(() => {
      if (initialRender.current || !debouncedInput) return
      fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
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
               returnDefault()
            }
         })
         .catch(err => console.error(err))
   }, [searchValue])

   return (
      <>
         <form onSubmit={(e) => {
            e.preventDefault()
         }}>
            <BiSearchAlt />
            <input type="search" name="search" id="searh" value={searchValue} onChange={(e) => {
               initialRender.current = false
               if (e.target.value) {
                  setDebouncedInput(e.target.value)
               } else {
                  setSearchvalue('')
               }
            }} placeholder="Search for a country..." />
         </form>
      </>
   )
}

export default Findcountry