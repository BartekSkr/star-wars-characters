import React, { useEffect, useState } from 'react'
import ReactTooltip from 'react-tooltip'
import DataContext from './dataContext'

export const DataState = ({ children }) => {
  //  characters data from API
  const [characters, setCharacters] = useState([])
  //  current data page
  const [currentPage, setCurrentPage] = useState(1)
  //  state of a loading spinner
  const [loading, setLoading] = useState(false)
  //  state of a button showing character's details
  const [buttonKey, setButtonKey] = useState('')

  useEffect(() => {
    getData(1)
    ReactTooltip.rebuild()
    // eslint-disable-next-line
  }, [])

  //  getting data from api
  const getData = pageNumber => {
    setLoading(true)
    fetch(`https://swapi.dev/api/people/?page=${pageNumber}`)
      .then(response => response.json())
      .then(data => {
        setLoading(false)
        setCharacters(data.results)
        setCurrentPage(pageNumber)

        console.log(data.results)
    })
  }

  //  searching for character by name
  const searchCharacterByName = e => {
    if (e.key === 'Enter') {
      fetch(`https://swapi.dev/api/people/?search=${e.target.value}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
    }
  }

  return (
    <DataContext.Provider value={{ loading, searchCharacterByName, characters, getData, currentPage, buttonKey, setButtonKey }}>
      {children}
    </DataContext.Provider>
  )
}