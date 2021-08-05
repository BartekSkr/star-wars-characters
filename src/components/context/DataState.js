import React, { useEffect, useState } from 'react'
import DataContext from './dataContext'

export const DataState = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getData(1)
    // eslint-disable-next-line
  }, [])

  //  getting data from api
  const getData = (pageNumber) => {
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
    <DataContext.Provider value={{ loading, searchCharacterByName, characters, getData, currentPage }}>
      {children}
    </DataContext.Provider>
  )
}