import React, { useContext } from 'react'
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJournalWhills } from '@fortawesome/free-solid-svg-icons'
import DataContext from '../../context/dataContext'
import ReactTooltip from 'react-tooltip'

export const Search = () => {
  const dataContext = useContext(DataContext)
  const { getData, searchCharacterByName, setApi, currentPage } = dataContext

  return (
    <div className='search'>
      <button
        className='search-button'
        data-for='search-btn'
        data-tip='Show character list'
        onClick={() => {
          setApi('https://swapi.dev/api/people/?page=')
          getData('https://swapi.dev/api/people/?page=', currentPage)
        }}
      >
        <FontAwesomeIcon icon={faJournalWhills} size='2x' />
      </button>
      <input
        type="text"
        name='text'
        className='search-input'
        placeholder='Search for a character...'
        onClick={e => e.target.value = ''}
        onKeyUp={searchCharacterByName}
      />
      <ReactTooltip id='search-btn' place='right' effect='solid' type='info' />
    </div>
  )
}
