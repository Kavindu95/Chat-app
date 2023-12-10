import React from 'react'
import Add from '../img/10.jpg'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" name="" id="" />
      </div>
      <div className='userChat'>
        <img src={Add} alt="" />
        <div className="userChatInfo">
          <span>Kavi</span>
        </div>

      </div>
      
    </div>
  )
}

export default Search
