import React from 'react'
import FindRegion from './find'
import Findcountry from './findcountry'
const SearchForm = () => {
   return (
      <div className='find'>
         <Findcountry />
         <FindRegion />
      </div>
   )
}

export default SearchForm