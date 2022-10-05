import React from 'react'
import SearchForm from '../components/searchForm'
import CountryList from '../components/countrylist'
const Home = () => {
   return (
      <div className='container'>
         <SearchForm />
         <CountryList />
      </div>
   )
}

export default Home