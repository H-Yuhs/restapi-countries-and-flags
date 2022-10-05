import React from "react"
import { useFetch } from "./useFetch"
import { useContext } from "react"
const url = `https://restcountries.com/v3.1/`
const ContextCreator = React.createContext()
export const ContextProvider = ({ children }) => {
   const { countries, isLoading, key, isError, setKey, setCountries, setIsError, setIsLoading } = useFetch(url)
   return (
      <ContextCreator.Provider value={{ countries, isLoading, key, isError, setKey, setCountries, setIsError, setIsLoading }}>

         {children}
      </ContextCreator.Provider>
   )
}

export const ContextUser = () => {
   return useContext(ContextCreator)
}