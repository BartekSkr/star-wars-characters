import React, { useContext } from 'react'
import './Search.css'
import DataContext from '../../context/dataContext'

export const Search = () => {
  const dataContext = useContext(DataContext)
  const { searchCharacterByName } = dataContext

  return (
    <div className='search'>
      <input
        type="text"
        name='text'
        className='search-input'
        placeholder='Search for a character...'
        onClick={e => e.target.value = ''}
        onKeyUp={searchCharacterByName}
      />
    </div>
  )
}
