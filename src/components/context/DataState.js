import React, { useEffect, useState } from 'react'
import DataContext from './dataContext'

export const DataState = ({ children }) => {
  const [character, setCharacter] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getData(1)
    // eslint-disable-next-line
  }, [])

  //  getting data from apis (getData() & resPromise())
  const getData = (pageNumber) => {
    setLoading(true)
    fetch(`https://swapi.dev/api/people/?page=${pageNumber}&format=json`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setLoading(false)
    })
  }

  const searchCharacterByName = e => {
    if (e.key === 'Enter') {
      fetch(`https://swapi.dev/api/people/?search=${e.target.value}`)
        .then(response => response.json())
        .then(data => {
          setCharacter(data)
          console.log(data)
        })
    }
  }

  return (
    <DataContext.Provider value={{ loading, searchCharacterByName }}>
      {children}
    </DataContext.Provider>
  )
}