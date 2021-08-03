import React, { Fragment, useContext } from 'react'
import './Characters.css'
import { Search } from './Search'
import { Spinner } from '../../layout/Spinner'
import DataContext from '../../context/dataContext'

export const Characters = () => {
  const dataContext = useContext(DataContext)
  const { characters, loading } = dataContext

  if (loading) {
    return <Spinner />
  } else {
    return (
    <Fragment>
      <Search />
      <div className='character'>
          <div className='character-info'>
          {characters.map((character, index) => (
            <div key={index}>
              <h2>{character.name}</h2>
            </div>
          ))}
          {/* <h2>Luke Skywalker</h2>
          <h4>Height: 172 cm</h4>
          <h4>Mass: 77 kg</h4>
          <h4>Hair color: blond</h4>
          <h4>Skin color: fair</h4>
          <h4>Eye color: blue</h4>
          <h4>Birth year: 19BBY</h4>
          <h4>Gender: male</h4>
          <h4>Homeworld: Tatooine</h4> */}
        </div>
        <div className='character-button'>
          <button className='add-button'>Add to favourites</button>
        </div>
      </div>
    </Fragment>
    )
  }
}
