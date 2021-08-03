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
      <Fragment>
        {characters.map((character, index) => (
          <div key={index} className='character'>
            <div className='character-info'>
              <h3>{character.name}</h3>
              <span><strong>Height: </strong><p>{character.height} cm</p></span>
              <span><strong>Mass: </strong><p>{character.mass} kg</p></span>
              <span><strong>Hair color: </strong><p>{character.hair_color}</p></span>
              <span><strong>Birth year: </strong><p>{character.birth_year}</p></span>
              <span><strong>Gender: </strong><p>{character.gender}</p></span>
            </div>
            <div className='character-button'>
              <button className='add-button'>Add to favourites</button>
            </div>
          </div>
        ))}
      </Fragment>
    </Fragment>
    )
  }
}
