import React, { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import DataContext from './dataContext'

export const DataState = ({ children }) => {
  //  characters data from API & from user search
  const [characters, setCharacters] = useState([])
  //  number of characters found
  const [charactersCount, setCharactersCount] = useState()
  //  current data page
  const [currentPage, setCurrentPage] = useState(1)
  //  state of a loading spinner
  const [loading, setLoading] = useState(false)
  //  state of a button showing character's details
  const [buttonKey, setButtonKey] = useState('')
  //  set API for a pagination
  const [api, setApi] = useState('https://swapi.dev/api/people/?page=')
  //  input value for a pagination
  const [inputValue, setInputValue] = useState()

  useEffect(() => {
    ReactTooltip.rebuild()
  }, [])

  //  get data from api
  const getData = (api, pageNumber) => {
    setLoading(true)
    fetch(`${api}${pageNumber}`)
      .then(response => response.json())
      .then(data => {
        setLoading(false)
        setCharacters(data.results)
        setCurrentPage(pageNumber)
        setCharactersCount(data.count)

        console.log(data)
        console.log(data.count)
    })
  }

  //  searching for a character by name
  const searchCharacterByName = e => {
    if (e.key === 'Enter') {
      fetch(`https://swapi.dev/api/people/?search=${e.target.value}`)
        .then(response => response.json())
        .then(data => {
          setCharacters(data.results)
          setCharactersCount(data.count)
          setInputValue(e.target.value)
          setApi(`https://swapi.dev/api/people/?search=${e.target.value}&page=`)
          setCurrentPage(1)

          console.log('inputValue: ', e.target.value)
          console.log(data.results)
          console.log(data.count)
        })
    }
  }

  return (
    <DataContext.Provider value={{ loading, searchCharacterByName, characters, getData, currentPage, buttonKey, setButtonKey, charactersCount, api, setApi, inputValue }}>
      {children}
    </DataContext.Provider>
  )
}