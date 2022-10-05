import { useState, useEffect } from 'react'
export function useFetch(url) {
   const [countries, setCountries] = useState([])
   const [key, setKey] = useState('all')
   const [isLoading, setIsLoading] = useState(true)
   const [isError, setIsError] = useState(false)
   const getCountries = async () => {
      setIsLoading(true)
      fetch(`${url}${key}`)
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
            console.log(`${url}${key}`)
         })
         .catch(err => console.error(err))
   }
   useEffect(() => {
      getCountries()
   }, [key])
   return { countries, isLoading, key, isError, setKey, setCountries, setIsError, setIsLoading }
}

