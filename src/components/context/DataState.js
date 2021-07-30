import React, { useEffect, useState } from 'react'
import DataContext from './dataContext'

export const DataState = ({ children }) => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)

  const api1 = fetch('https://swapi.dev/api/people/?page=1&format=json')
  const api2 = fetch('https://swapi.dev/api/people/?page=2&format=json')
  const api3 = fetch('https://swapi.dev/api/people/?page=3&format=json')
  const api4 = fetch('https://swapi.dev/api/people/?page=4&format=json')
  const api5 = fetch('https://swapi.dev/api/people/?page=5&format=json')
  const api6 = fetch('https://swapi.dev/api/people/?page=6&format=json')
  const api7 = fetch('https://swapi.dev/api/people/?page=7&format=json')
  const api8 = fetch('https://swapi.dev/api/people/?page=8&format=json')
  const api9 = fetch('https://swapi.dev/api/people/?page=9&format=json')

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

  //  getting data from apis (getData() & resPromise())
  const getData = () => {
    setLoading(true)
    Promise.all([api1, api2, api3, api4, api5, api6, api7, api8, api9])
      .then(responses => {
        responses.forEach(res => {
          resProcess(res.json())
          setLoading(false)
        })
      })
  }

  const resProcess = (promise) => {
    promise.then(data => {
      setCharacters(data)
      console.log('console.log():', data)
      console.log('characters:', characters)
    })
  }

  return (
    <DataContext.Provider value={{ characters, loading }}>
      {children}
    </DataContext.Provider>
  )
}